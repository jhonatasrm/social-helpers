var locale = navigator.language;
const btnMoreOptionsGuidelines = document.getElementById("btnMoreOptionsGuidelines");
const optionsGuidelines = document.getElementById("optionsGuidelines");
const imageGuidelines = document.getElementById("image_submenu_guidelines");
const imageRoles = document.getElementById("image_submenu_roles");
const mainPanel = document.getElementById("mainPanel");
const btnMoreOptionsRoles = document.getElementById('btnMoreOptionsRoles');
const optionRoles = document.getElementById('optionsRoles');

// dropdown guidelines
btnMoreOptionsGuidelines.addEventListener('click', function(event) {
    if (optionsGuidelines.style.display === 'none'){
      optionsGuidelines.style.display = 'inline';
      imageGuidelines.src = '../../res/icons/arrowhead-up.png';
      mainPanel.style.display = 'none';
    }else{
      optionsGuidelines.style.display = 'none'
      imageGuidelines.src = '../../res/icons/arrowhead-down.png';
    }
}, true);
// dropdown Roles
btnMoreOptionsRoles.addEventListener('click', function(event){
  if (optionRoles.style.display === 'none'){
    optionRoles.style.display = 'inline';
    imageRoles.src = '../../res/icons/arrowhead-up.png';
    mainPanel.style.display = 'none';
  }else{
    optionRoles.style.display = 'none';
    imageRoles.src = '../../res/icons/arrowhead-down.png';
  }
});


document.addEventListener('click', function(event) {
  // Common Replies
  if (event.target.id == 'menuCommonReplies') {
    browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/army-of-awesome-common-replies`});
  }
  // menu more options inside Social Support Guidelines
  else if (event.target.id == 'menuTipsFromCommunity') {
    if (locale == 'pt-BR'){
      browser.tabs.create({url: `https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_algumas-dicas-da-comunidade`});
    }else{
      browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_some-tips-from-the-community`});
    }
  }
  else if (event.target.id == 'menuHowDoIgetHelp') {
    if (locale == 'pt-BR'){
      browser.tabs.create({url: `https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_como-pedir-ajuda`});
    }else{
      browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_how-do-i-get-help`});
    }
  }
  else if (event.target.id == 'menuEscalate') {
    if (locale == 'pt-BR'){
      browser.tabs.create({url: `https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_como-escalar-ou-encontrar-mais-ajuda`});
    }else{
      browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_where-and-when-to-escalate-or-find-more-help`});
    }
  }
  // menu Roles Social Support Program
  else if (event.target.id == 'menuTheCasualSocialHelper'){
    browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-casual-social-helper-tweetdeck`});
  }
  else if (event.target.id == 'menuTheOfficialSocialHelper'){
    browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-official-social-helper-reply-by-buffer`});
  }
  else if (event.target.id == 'menuTheTriager'){
    browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-triager`});
  }
  else if (event.target.id == 'menuTheSocialProgramModerator'){
    browser.tabs.create({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-social-program-moderator`});
  }
  // configuring TweetDeck
  else if (event.target.id == 'menuConfiguringTweetDeck'){
    browser.tabs.create({url: `https://docs.google.com/document/d/13iGyBVSDOaeqP46oMU6hqedhn0oXFTHLUTW5RVr6tUQ/edit`});
  }
  // telegram channel
  else if (event.target.id == 'menuTelegram') {
    browser.tabs.create({url: `http://t.me/respond`});
  }
  event.preventDefault();
});
