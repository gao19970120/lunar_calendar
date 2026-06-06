console.info("%c NEW卡-万年历 \n%c        v 3.8-new ", "color: red; font-weight: bold; background: black", "color: white; font-weight: bold; background: black");

const loadCards = async () => {
  await import('./new-lunar-calendar.js');
  await import('./new-lunar-calendar-phone.js');
  await import('./new-lunar-calendar-pad.js?v=20260606-new-independent');
  await import('./new-birthday-card.js');

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

loadCards();
