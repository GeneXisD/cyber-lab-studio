const output = document.getElementById("output");
const input = document.getElementById("input");
const terminal = document.getElementById("terminal");
const form = document.getElementById("command-form");

const commands = {
  help: `Available commands:

about
creator
labs
tools
research
demo nmap
demo metasploit
demo autopsy
demo ish64
clear`,

  about: `Victor Cyber Lab Studio

Interactive cybersecurity portfolio
built for demonstrating labs, tools,
and research projects.`,

  creator: `Creator:
Victor Jose Corral

Cybersecurity student
Creator of the iSH64 research environment.`,

  labs: `Labs available:

network-scanning
metasploit-labs
digital-forensics
web-recon`,

  tools: `Security tools:

network-scanner
log-analyzer
xss-detector`,

  research: `Research topics:

ish64-security-environment
web-security-analysis`,

  "demo nmap": `Starting Nmap scan...

PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https`,

  "demo metasploit": `msf6 > use exploit/unix/ftp/vsftpd_234_backdoor
msf6 > set RHOSTS 192.168.1.15
msf6 > run

Session opened`,

  "demo autopsy": `Digital Forensics Analysis

User artifacts discovered
Deleted files timeline recovered
Evidence files located`,

  "demo ish64": `iSH64 Research Environment

Mobile Linux experimentation
64-bit architecture research
Security testing sandbox`
};

function print(text = "") {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.textContent = "";
}

function runCommand(cmd) {
  const cleanCmd = cmd.trim();

  if (cleanCmd !== "") {
    print(`victor@lab-studio:~$ ${cleanCmd}`);
  }

  if (cleanCmd === "clear") {
    clearOutput();
    return;
  }

  if (cleanCmd === "") {
    print("");
    return;
  }

  if (commands[cleanCmd]) {
    print(commands[cleanCmd]);
  } else {
    print("command not found");
  }

  print("");
}

function submitCurrentCommand() {
  const cmd = input.value;
  runCommand(cmd);
  input.value = "";
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitCurrentCommand();
  });
}

if (terminal) {
  terminal.addEventListener("click", function () {
    input.focus();
  });
}

window.addEventListener("load", function () {
  print("Victor Cyber Lab Studio");
  print("Type 'help' to begin");
  print("");
  input.focus();
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    submitCurrentCommand();
  }
});web-recon`,

  tools: `Security tools:

network-scanner
log-analyzer
xss-detector`,

  research: `Research topics:

ish64-security-environment
web-security-analysis`,

  "demo nmap": `Starting Nmap scan...

PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https`,

  "demo metasploit": `msf6 > use exploit/unix/ftp/vsftpd_234_backdoor
msf6 > set RHOSTS 192.168.1.15
msf6 > run

Session opened`,

  "demo autopsy": `Digital Forensics Analysis

User artifacts discovered
Deleted files timeline recovered
Evidence files located`,

  "demo ish64": `iSH64 Research Environment

Mobile Linux experimentation
64-bit architecture research
Security testing sandbox`
};

function print(text = "") {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.textContent = "";
}

function runCommand(cmd) {
  const cleanCmd = cmd.trim();

  if (cleanCmd !== "") {
    print(`victor@lab-studio:~$ ${cleanCmd}`);
  }

  if (cleanCmd === "clear") {
    clearOutput();
    return;
  }

  if (cleanCmd === "") {
    print("");
    return;
  }

  if (commands[cleanCmd]) {
    print(commands[cleanCmd]);
  } else {
    print("command not found");
  }

  print("");
}

function submitCurrentCommand() {
  const cmd = input.value;
  runCommand(cmd);
  input.value = "";
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitCurrentCommand();
  });
}

if (terminal) {
  terminal.addEventListener("click", function () {
    input.focus();
  });
}

window.addEventListener("load", function () {
  print("Victor Cyber Lab Studio");
  print("Type 'help' to begin");
  print("");
  input.focus();
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    submitCurrentCommand();
  }
});
  tools: `Security tools:

network-scanner
log-analyzer
xss-detector`,

  research: `Research topics:

ish64-security-environment
web-security-analysis`,

  "demo nmap": `Starting Nmap scan...

PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https`,

  "demo metasploit": `msf6 > use exploit/unix/ftp/vsftpd_234_backdoor
msf6 > set RHOSTS 192.168.1.15
msf6 > run

Session opened`,

  "demo autopsy": `Digital Forensics Analysis

User artifacts discovered
Deleted files timeline recovered
Evidence files located`,

  "demo ish64": `iSH64 Research Environment

Mobile Linux experimentation
64-bit architecture research
Security testing sandbox`
};

function print(text = "") {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function runCommand(cmd) {
  print(`victor@lab-studio:~$ ${cmd}`);

  if (cmd === "clear") {
    output.textContent = "";
    return;
  }

  if (commands[cmd]) {
    print(commands[cmd]);
  } else if (cmd !== "") {
    print("command not found");
  }

  print("");
}

function submitCurrentCommand() {
  const cmd = input.value.trim();
  runCommand(cmd);
  input.value = "";
}

terminal.addEventListener("click", () => {
  input.focus();
});

window.addEventListener("load", () => {
  print("Victor Cyber Lab Studio");
  print("Type 'help' to begin");
  print("");
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    submitCurrentCommand();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
  }
});
  tools: `Security tools:

network-scanner
log-analyzer
xss-detector`,

  research: `Research topics:

ish64-security-environment
web-security-analysis`,

  "demo nmap": `Starting Nmap scan...

PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https`,

  "demo metasploit": `msf6 > use exploit/unix/ftp/vsftpd_234_backdoor
msf6 > set RHOSTS 192.168.1.15
msf6 > run

Session opened`,

  "demo autopsy": `Digital Forensics Analysis

User artifacts discovered
Deleted files timeline recovered
Evidence files located`,

  "demo ish64": `iSH64 Research Environment

Mobile Linux experimentation
64-bit architecture research
security testing sandbox`
};

function print(text = "") {
  output.innerText += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function runCommand(cmd) {
  print(`victor@lab-studio:~$ ${cmd}`);

  if (cmd === "clear") {
    output.innerText = "";
    return;
  }

  if (commands[cmd]) {
    print(commands[cmd]);
  } else if (cmd.trim() !== "") {
    print("command not found");
  }

  print("");
}

terminal.addEventListener("click", () => {
  input.focus();
});

window.addEventListener("load", () => {
  input.focus();
  print("Victor Cyber Lab Studio");
  print("Type 'help' to begin");
  print("");
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    runCommand(cmd);
    input.value = "";
  }
});22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
`,

"demo metasploit": `
msf6 > use exploit/unix/ftp/vsftpd_234_backdoor
msf6 > set RHOSTS 192.168.1.15
msf6 > run

Session opened
`,

"demo autopsy": `
Digital Forensics Analysis

User artifacts discovered
Deleted files timeline recovered
Evidence files located
`,

"demo ish64": `
iSH64 Research Environment

Mobile Linux experimentation
64-bit architecture research
security testing sandbox
`

}

function print(text){
output.innerText += text + "\n"
output.scrollTop = output.scrollHeight
}

print("Victor Cyber Lab Studio")
print("Type 'help' to begin\n")

input.addEventListener("keydown", function(e){

if(e.key === "Enter"){

const cmd = input.value.trim()

print("victor@lab-studio:~$ " + cmd)

if(cmd === "clear"){
output.innerText=""
}

else if(commands[cmd]){
print(commands[cmd])
}

else{
print("command not found")
}

input.value=""
}

})
