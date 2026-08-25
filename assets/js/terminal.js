(function () {
  "use strict";

  var root = JSON.parse(document.getElementById("term-fs").textContent);
  var openMap = JSON.parse(document.getElementById("term-open").textContent);

  var output = document.getElementById("term-output");
  var input = document.getElementById("term-input");
  var promptEl = document.getElementById("term-prompt");
  var body = document.getElementById("term-body");

  var cwd = []; // path segments from root, e.g. ["projects"]
  var history = [];
  var historyIndex = -1;

  function isDir(node) {
    return node !== null && typeof node === "object";
  }

  function dirAt(path) {
    var node = root;
    for (var i = 0; i < path.length; i++) {
      if (!isDir(node) || !(path[i] in node)) return null;
      node = node[path[i]];
      if (!isDir(node)) return null;
    }
    return node;
  }

  function promptPath() {
    return cwd.length === 0 ? "~" : "~/" + cwd.join("/");
  }

  function updatePrompt() {
    promptEl.textContent = promptPath() + " $";
  }

  function print(text, cls) {
    var line = document.createElement("div");
    if (cls) line.className = cls;
    line.textContent = text;
    output.appendChild(line);
  }

  function printLines(text) {
    text.split("\n").forEach(function (l) {
      print(l);
    });
  }

  var HELP = [
    "Available commands:",
    "  help          Show this help message",
    "  ls            List directory contents",
    "  cd <dir>      Change directory",
    "  cat <file>    Read a file",
    "  pwd           Print working directory",
    "  open <target> Open a link (github, linkedin, email, about, projects, <project>)",
    "  whoami        About me",
    "  clear         Clear terminal",
  ].join("\n");

  function run(raw) {
    var trimmed = raw.trim();
    if (trimmed === "") return;

    print(promptPath() + " $ " + raw, "term__echo");

    var parts = trimmed.split(/\s+/);
    var cmd = parts[0];
    var arg = parts.slice(1).join(" ");
    var dir = dirAt(cwd);

    switch (cmd) {
      case "help":
        printLines(HELP);
        break;

      case "ls": {
        var keys = Object.keys(dir);
        if (keys.length === 0) {
          print("(empty)");
        } else {
          printLines(
            keys
              .map(function (k) {
                return isDir(dir[k]) ? k + "/" : k;
              })
              .join("  ")
          );
        }
        break;
      }

      case "cd": {
        if (!arg || arg === "~") {
          cwd = [];
        } else if (arg === "..") {
          cwd.pop();
        } else {
          var target = arg.replace(/\/$/, "");
          if (dir && isDir(dir[target])) {
            cwd = cwd.concat([target]);
          } else {
            print("cd: no such directory: " + arg);
          }
        }
        updatePrompt();
        break;
      }

      case "cat": {
        if (!arg) {
          print("usage: cat <file>");
        } else if (dir && arg in dir && !isDir(dir[arg])) {
          printLines(dir[arg]);
        } else {
          print("cat: no such file: " + arg);
        }
        break;
      }

      case "pwd":
        print(promptPath());
        break;

      case "whoami":
        printLines(root["whoami.txt"]);
        break;

      case "open": {
        if (!arg) {
          print("usage: open <target>");
          break;
        }
        var key = arg.replace(/\.txt$/, "");
        var url = openMap[key];
        if (!url) {
          print("open: nothing to open for: " + arg);
        } else if (/^https?:|^mailto:/.test(url)) {
          print("opening " + arg + "...");
          window.open(url, "_blank", "noopener");
        } else {
          print("opening " + arg + "...");
          window.location.href = url;
        }
        break;
      }

      case "clear":
        output.innerHTML = "";
        break;

      default:
        print(cmd + ": command not found. Type \"help\" for available commands.");
    }
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var val = input.value;
      history.push(val);
      historyIndex = history.length;
      input.value = "";
      run(val);
      body.scrollTop = body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex] || "";
        requestAnimationFrame(function () {
          input.setSelectionRange(input.value.length, input.value.length);
        });
      }
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex] || "";
      } else {
        historyIndex = history.length;
        input.value = "";
      }
      e.preventDefault();
    }
  });

  document.querySelector(".term").addEventListener("click", function () {
    input.focus();
  });

  updatePrompt();
  input.focus();
})();
