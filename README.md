# H Y P E R Z S H [![Build Status](https://travis-ci.org/tylerreckart/hyperzsh.svg?branch=master)](https://travis-ci.org/tylerreckart/hyperzsh)  
Hyperzsh is a [oh-my-zsh](https://github.com/robbyrussel/oh-my-zsh) shell theme that gives you a comprehensive overview of the branch you're working on and the status of your repository throughout the development process without cluttering your terminal.  

If currently shows:  
- Git status
- Timestamp
- Current directory
- Background jobs
- Exit code of last command

## Installation  
### For [antigen](https://github.com/zsh-users/antigen) users
Add `antigen bundle tylerreckart/hyperzsh` to your `.zshrc`. Antigen will clone and load the hyperzsh repository automaticall the next time you start a zsh session.  

### For [oh-my-zsh](http://ohmyz.sh) users  
If you're using oh-my-zsh, follow these steps to install hyperzsh:
`git clone https://github.com/tylerreckart/hyperzsh`  
`cd hyperzsh && cp -R hyperzsh.zsh-theme ~/.oh-my-zsh/themes/hyperzsh.zsh-theme`  
`vim ~/.zshrc`
Set `ZSH_THEME="current_theme"` to `ZSH_theme="hyperzsh"`  

### For [Zgen](https://github.com/tarjoilija/zgen) users
Add `zgen load tylerreckart/hyperzsh` to your `.zshrc` with your other `zgen load` statements.  
`zgen save` and zgen will automaticall handle cloning the repository for you.  

## Color schemes  
Hyperzsh was built with HyperTerm in mind. The demo above uses my custom color scheme called [hyperblue](https://github.com/tylerreckart/hyperblue). You can automatically configure hyperblue by adding `'hyperblue'` to the plugins section in `~/.hyperterm.js`.  
