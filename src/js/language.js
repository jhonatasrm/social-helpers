const menuCommonReplies = document.getElementById('menuCommonReplies'),
      menuSocialSupportGuidelines = document.getElementById('menuSocialSupportGuidelines'),
      TelegramMenu = document.getElementById('menuTelegram'),
      SeparatorToTelegram = document.getElementById('menuJoinUS');

let textElements = document.querySelectorAll('[data-manifest]');
    for (let element of textElements) {
      element.textContent = Manifest[element.dataset.manifest];
    }

textElements = document.querySelectorAll('[data-i18n]');
    for (let element of textElements) {
      element.innerText = browser.i18n.getMessage(element.dataset.i18n);
    }