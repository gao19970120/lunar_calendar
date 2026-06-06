console.info("%c NEW卡-万年历 \n%c        v 3.8-new ", "color: red; font-weight: bold; background: black", "color: white; font-weight: bold; background: black");

const defineAlias = (newTag, baseTag) => {
  if (customElements.get(newTag)) return;
  const Base = customElements.get(baseTag);
  if (!Base) throw new Error(`Base custom element not found: ${baseTag}`);
  class AliasElement extends Base {}
  customElements.define(newTag, AliasElement);
};

const loadCards = async () => {
  await import('/xiaoshi/xiaoshi-lunar/lunar-calendar.js');
  await import('./new-lunar-calendar-phone.js?v=20260606-new-alias-fix');
  await import('./new-lunar-calendar-pad.js?v=20260606-new-alias-fix');
  await import('/xiaoshi/xiaoshi-lunar/birthday-card.js');

  defineAlias('new-lunar-calendar', 'xiaoshi-lunar-calendar');
  defineAlias('new-lunar-calendar-pad', 'xiaoshi-lunar-calendar-pad');
  defineAlias('new-lunar-calendar-pad-date', 'xiaoshi-lunar-calendar-pad-date');
  defineAlias('new-lunar-calendar-phone', 'xiaoshi-lunar-calendar-phone');
  defineAlias('new-lunar-calendar-phone-date', 'xiaoshi-lunar-calendar-phone-date');
  defineAlias('new-birthday-card', 'xiaoshi-birthday-card');

  window.customCards = window.customCards || [];
  window.customCards.push(...cardConfigs);
};

const cardConfigs = [
  {
    type: 'new-lunar-calendar-phone-date',
    name: 'NEW万年历 - 手机日期',
    description: '',
    preview: true
  },
  {
    type: 'new-lunar-calendar-phone',
    name: 'NEW万年历 - 手机端聚合',
    description: ''
  },
  {
    type: 'new-lunar-calendar-pad-date',
    name: 'NEW万年历 - 平板日期',
    description: '',
    preview: true
  },
  {
    type: 'new-lunar-calendar-pad',
    name: 'NEW万年历 - 平板端聚合',
    description: ''
  },
  {
    type: 'new-lunar-calendar',
    name: 'NEW万年历 - 日历UI',
    description: '',
    preview: true
  },
  {
    type: 'new-birthday-card',
    name: 'NEW万年历 - 生日信息卡片',
    description: '',
    preview: true
  }
];

loadCards().catch((error) => {
  console.error('[new_lunar] card bootstrap failed:', error);
});
