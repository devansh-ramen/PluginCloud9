// Generated by CoffeeScript 1.3.3
(function() {

  define(function(require, exports, module) {
    var CSS_CLASS_NAME, CoffeeScript, DIVIDER_POSITION, MENU_ENTRY_POSITION, OPEN_FILE_TIMEOUT, OPEN_LIVECOFFEE_TIMEOUT, commands, css, editors, ext, ide, lineMatching, markup, menus, util;
    ide = require('core/ide');
    ext = require('core/ext');
    util = require('core/util');
    editors = require('ext/editors/editors');
    markup = require('./pluginComment.xml.js'); //important
    menus = require("ext/menus/menus"); //important
    commands = require("ext/commands/commands");
    CoffeeScript = require('./vendor/coffeescript.js');
    lineMatching = require('./vendor/cs_js_source_mapping.js');
    css = require("./pluginComment.css.js"); //important
    DIVIDER_POSITION = 2100;
    MENU_ENTRY_POSITION = 2200;
    CSS_CLASS_NAME = "livecoffee-highlight";
    OPEN_FILE_TIMEOUT = 150;
    OPEN_LIVECOFFEE_TIMEOUT = 70;
    return module.exports = ext.register('ext/livecoffee/livecoffee', {
      name: 'Comment Plugin',
      dev: 'Devansh',
      type: ext.GENERAL,
      alone: true,
      markup: markup,
      commands: {
        'livecoffee': {
          hint: 'Compile the current coffeescript document'
        }
      },
      hotitems: {},
      nodes: [],
      css: css,
      hook: function() {
        var _self,
          _this = this;
        _self = this;
        commands.addCommand({
          name: "livecoffee",
          hint: "start livecoffee plugin",
          bindKey: {
            mac: "Command-K",
            win: "Ctrl-K"
          },
          exec: function() {
            return _self.livecoffee();
          }
        });
        this.nodes.push(menus.addItemByPath("Edit/~", new apf.divider(), DIVIDER_POSITION));
        this.nodes.push(menus.addItemByPath("Edit/Add Comments", new apf.item({ //adding an option to the Top Menu 
          command: "livecoffee"
        }), MENU_ENTRY_POSITION));
        this.hotitems['livecoffee'] = [this.nodes[1]];
        ide.addEventListener('livecoffee_show_file', function(options) {
          return _this.show(options);
        });
      },
      livecoffee: function() {
        var aceEditor, editor, liveCoffeeEditor,
          _this = this;
       // ext.initExtension(this);
       // this.compile();
        this.liveCoffeeOutput.show();
        if (this.liveCoffeeOutput.visible) {
          editor = editors.currentEditor;
          aceEditor = editor.amlEditor.$editor;
          liveCoffeeEditor = this.liveCoffeeCodeOutput.$editor;
         // editor.ceEditor.addEventListener('keyup', function() {
          //  return _this.compile();
        //  });
        //  aceEditor.addEventListener('click', function() {
          //  if (_this.liveCoffeeOptMatchLines.checked) {
              //return _this.highlightBlockFromCoffee();
         //   }
        //  });
          //liveCoffeeEditor.addEventListener('click', function() {
           // if (_this.liveCoffeeOptMatchLines.checked) {
             // return _this.highlightBlockFromJS();
          //  }
         // });
        }
      },
      compile: function() {
        var aceEditor, bare, compiledJS, doc, editor, matchingLines, value;
        editor = editors.currentEditor;
        aceEditor = editor.amlEditor.$editor;
        doc = editor.getDocument();
        value = doc.getValue();
        compiledJS = '';
        try {
          bare = this.liveCoffeeOptCompileBare.checked;
          compiledJS = CoffeeScript.compile(value, {
            bare: bare
          });
          matchingLines = lineMatching.source_line_mappings(value.split("\n"), compiledJS.split("\n"));
          this.matchingBlocks = this.convertMatchingLines(matchingLines);
          this.liveCoffeeCodeOutput.setValue(compiledJS);
          if (this.liveCoffeeOptMatchLines.checked) {
            this.highlightBlockFromCoffee();
          }
          if (this.liveCoffeeOptCompileNodes.checked) {
            this.liveCoffeeNodeOutput.setValue(CoffeeScript.nodes(value));
          }
          if (this.liveCoffeeOptCompileTokens.checked) {
            this.liveCoffeeTokenOutput.setValue(CoffeeScript.tokens(value));
          }
        } catch (exp) {
          this.liveCoffeeCodeOutput.setValue(exp.message);
        }
      },
      convertMatchingLines: function(matchingLines) {
        var block, current_line, i, matchingBlocks, next_line, _i, _ref;
        matchingBlocks = {
          fromCoffee: {},
          fromJS: {}
        };
        for (i = _i = 0, _ref = matchingLines.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          current_line = matchingLines[i];
          next_line = matchingLines[i + 1];
          block = this.createBlock(current_line, next_line);
          matchingBlocks = this.mapLinesToBlocks(block, matchingBlocks);
        }
        return matchingBlocks;
      },
      createBlock: function(currentLine, nextLine) {
        var jsEnd, jsStart;
        if (currentLine[1] === nextLine[1]) {
          jsStart = currentLine[1] - 1;
          jsEnd = currentLine[1] - 1;
        } else {
          jsStart = currentLine[1];
          jsEnd = nextLine[1] - 1;
        }
        return {
          coffee_start: currentLine[0],
          coffee_end: nextLine[0] - 1,
          js_start: jsStart,
          js_end: jsEnd
        };
      },
      mapLinesToBlocks: function(block, matchingBlocks) {
        var coffeeLine, jsLine, _i, _j, _ref, _ref1, _ref2, _ref3;
        for (coffeeLine = _i = _ref = block.coffee_start, _ref1 = block.coffee_end; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; coffeeLine = _ref <= _ref1 ? ++_i : --_i) {
          matchingBlocks.fromCoffee[coffeeLine] = block;
        }
        for (jsLine = _j = _ref2 = block.js_start, _ref3 = block.js_end; _ref2 <= _ref3 ? _j <= _ref3 : _j >= _ref3; jsLine = _ref2 <= _ref3 ? ++_j : --_j) {
          matchingBlocks.fromJS[jsLine] = block;
        }
        return matchingBlocks;
      },
      highlightBlockFromCoffee: function() {
        var matchingBlock;
        this.removeHighlightedBlocks();
        matchingBlock = this.getMatchingBlockFromCoffee();
        this.adjustLiveCoffeeCursor(matchingBlock);
        return this.decorateBlocks(matchingBlock);
      },
      highlightBlockFromJS: function(line) {
        var matchingBlock;
        if (line == null) {
          line = null;
        }
        this.removeHighlightedBlocks();
        if (line != null) {
          console.log(this.matchingBlocks);
          console.log(line);
          matchingBlock = this.matchingBlocks.fromJS[line];
          console.log(matchingBlock);
          if (matchingBlock == null) {
            return;
          }
          this.adjustLiveCoffeeCursor(matchingBlock);
        } else {
          matchingBlock = this.getMatchingBlockFromJS();
        }
        this.adjustEditorCursor(matchingBlock);
        return this.decorateBlocks(matchingBlock);
      },
      removeHighlightedBlocks: function() {
        var coffeeLineNumber, jsLineNumber, _i, _j, _len, _len1, _ref, _ref1, _results;
        if (this.decoratedLines != null) {
          _ref = this.decoratedLines.js;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            jsLineNumber = _ref[_i];
            this.getLiveCoffeeEditor().renderer.removeGutterDecoration(jsLineNumber, CSS_CLASS_NAME);
          }
          _ref1 = this.decoratedLines.coffee;
          _results = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            coffeeLineNumber = _ref1[_j];
            _results.push(this.getAceEditor().renderer.removeGutterDecoration(coffeeLineNumber, CSS_CLASS_NAME));
          }
          return _results;
        }
      },
      getMatchingBlockFromCoffee: function() {
        var currentLine, matchingBlock;
        currentLine = this.getAceEditor().getCursorPosition().row;
        return matchingBlock = this.matchingBlocks.fromCoffee[currentLine];
      },
      getMatchingBlockFromJS: function() {
        var currentLine, matchingBlock;
        currentLine = this.getLiveCoffeeEditor().getCursorPosition().row;
        return matchingBlock = this.matchingBlocks.fromJS[currentLine];
      },
      adjustLiveCoffeeCursor: function(matchingBlock) {
        return this.getLiveCoffeeEditor().gotoLine(matchingBlock.js_start + 1);
      },
      adjustEditorCursor: function(matchingBlock) {
        return this.getAceEditor().gotoLine(matchingBlock.coffee_start + 1);
      },
      decorateBlocks: function(matchingBlock) {
        var coffeeLineNumber, jsLineNumber, _i, _j, _k, _l, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _results, _results1, _results2;
        this.decoratedLines = {
          js: (function() {
            _results = [];
            for (var _i = _ref = matchingBlock.js_start, _ref1 = matchingBlock.js_end; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; _ref <= _ref1 ? _i++ : _i--){ _results.push(_i); }
            return _results;
          }).apply(this),
          coffee: (function() {
            _results1 = [];
            for (var _j = _ref2 = matchingBlock.coffee_start, _ref3 = matchingBlock.coffee_end; _ref2 <= _ref3 ? _j <= _ref3 : _j >= _ref3; _ref2 <= _ref3 ? _j++ : _j--){ _results1.push(_j); }
            return _results1;
          }).apply(this)
        };
        _ref4 = this.decoratedLines.js;
        for (_k = 0, _len = _ref4.length; _k < _len; _k++) {
          jsLineNumber = _ref4[_k];
          this.getLiveCoffeeEditor().renderer.addGutterDecoration(jsLineNumber, CSS_CLASS_NAME);
        }
        _ref5 = this.decoratedLines.coffee;
        _results2 = [];
        for (_l = 0, _len1 = _ref5.length; _l < _len1; _l++) {
          coffeeLineNumber = _ref5[_l];
          _results2.push(this.getAceEditor().renderer.addGutterDecoration(coffeeLineNumber, CSS_CLASS_NAME));
        }
        return _results2;
      },
      getAceEditor: function() {
        var aceEditor, editor;
        editor = editors.currentEditor;
        return aceEditor = editor.amlEditor.$editor;
      },
      getLiveCoffeeEditor: function() {
        return this.liveCoffeeCodeOutput.$editor;
      },
      init: function(amlNode) {
        var _this = this;
        apf.importCssString(css);
        liveCoffeeOptMatchLines.addEventListener('click', function() {
          if (liveCoffeeOptMatchLines.checked) {
            return _this.highlightBlockFromCoffee();
          } else {
            return _this.removeHighlightedBlocks();
          }
        });
        this.liveCoffeeOptMatchLines = liveCoffeeOptMatchLines;
        liveCoffeeOptCompileBare.addEventListener('click', function() {
          return _this.compile();
        });
        this.liveCoffeeOptCompileBare = liveCoffeeOptCompileBare;
        liveCoffeeOptCompileNodes.addEventListener('click', function() {
          if (liveCoffeeOptCompileNodes.checked) {
            _this.liveCoffeeNodes.enable();
            return _this.compile();
          } else {
            return liveCoffeeNodes.disable();
          }
        });
        this.liveCoffeeOptCompileNodes = liveCoffeeOptCompileNodes;
        liveCoffeeOptCompileTokens.addEventListener('click', function() {
          if (liveCoffeeOptCompileTokens.checked) {
            _this.liveCoffeeTokens.enable();
            return _this.compile();
          } else {
            return _this.liveCoffeeTokens.disable();
          }
        });
        this.liveCoffeeOptCompileTokens = liveCoffeeOptCompileTokens;
        liveCoffeeCodeOutput.syntax = 'javascript';
        this.liveCoffeeCodeOutput = liveCoffeeCodeOutput;
        this.liveCoffeeOutput = liveCoffeeOutput;
        liveCoffeeNodes.disable();
        this.liveCoffeeNodes = liveCoffeeNodes;
        this.liveCoffeeNodeOutput = liveCoffeeNodeOutput;
        liveCoffeeTokens.disable();
        this.liveCoffeeTokens = liveCoffeeTokens;
        this.liveCoffeeTokenOutput = liveCoffeeTokenOutput;
      },
      enable: function() {
        this.nodes.each(function(item) {
          return item.enable();
        });
        return this.disabled = false;
      },
      disable: function() {
        this.nodes.each(function(item) {
          return item.disable();
        });
        return this.disabled = true;
      },
      destroy: function() {
        this.nodes.each(function(item) {
          item.destroy(true, true);
        });
        this.nodes = [];
        this.liveCoffeeOptCompileBare.destroy(true, true);
        this.liveCoffeeOptCompileNodes.destroy(true, true);
        this.liveCoffeeOptCompileTokens.destroy(true, true);
        this.liveCoffeeOptMatchLines.destroy(true, true);
        this.liveCoffeeCodeOutput.destroy(true, true);
        this.liveCoffeeOutput.destroy(true, true);
        this.liveCoffeeNodes.destroy(true, true);
        this.liveCoffeeNodeOutput.destroy(true, true);
        this.liveCoffeeTokens.destroy(true, true);
        this.liveCoffeeTokenOutput.destroy(true, true);
      },
      closeCodeOutput: function() {
        this.liveCoffeeOptMatchLines.uncheck();
        this.removeHighlightedBlocks();
        return this.liveCoffeeOutput.hide();
      },
      show: function(options) {
        var line,
          _this = this;
        line = options.line - 1;
        return setTimeout((function() {
          return _this.startLiveCoffee(line, options.showJS);
        }), OPEN_FILE_TIMEOUT);
      },
      startLiveCoffee: function(line, showJS) {
        var _ref,
          _this = this;
        if ((_ref = this.liveCoffeeOutput) != null ? _ref.visible : void 0) {
          this.compile();
        } else {
          this.livecoffee();
        }
        this.liveCoffeeOptMatchLines.check();
        setTimeout((function() {
          return _this.highlightBlockFromJS(line);
        }), OPEN_LIVECOFFEE_TIMEOUT);
        if (!showJS) {
          return this.closeCodeOutput();
        }
      }
    });
  });

}).call(this);
