import './style.css';
import logoImage from './logot.png';

const heroStats = [
  { value: '18K+', label: 'Verified recycling drops' },
  { value: '3.2K', label: 'Active climate learners' },
  { value: '240+', label: 'Green jobs supported' },
];

const featureHighlights = [
  {
    icon: '🎮',
    title: 'Game-based habits',
    copy:
      'Scan coded recycling bags, unlock streaks, and earn rewards that keep sustainable habits sticky and fun.',
  },
  {
    icon: '📊',
    title: 'Impact-grade data',
    copy:
      'Every scan captures emissions avoided, materials sorted, and household engagement so partners see real ROI.',
  },
  {
    icon: '🧠',
    title: 'Learning in micro-doses',
    copy:
      'Interactive lessons teach climate literacy, waste sorting, and circular economy skills in under five minutes.',
  },
  {
    icon: '🤝',
    title: 'Community-first network',
    copy:
      'Collectors, educators, and recyclers connect through shared dashboards that keep incentives aligned.',
  },
];

const communityValues = [
  {
    title: 'Regenerative Impact',
    copy:
      'We partner with growers to replenish soil, build resilient food systems, and cut carbon at the source.',
  },
  {
    title: 'Community First',
    copy:
      'Every initiative is co-created with farmers, cooperatives, and educators so progress is shared equitably.',
  },
  {
    title: 'Open Knowledge',
    copy:
      'Toolkits, field data, and funding guides stay transparent to make climate-smart practices easier to adopt.',
  },
];

const workflowSteps = [
  {
    title: 'Sign up & collect your smart bags',
    copy:
      'Join the pilot, receive QR-coded recycling bags, and invite your household or community to participate.',
  },
  {
    title: 'Play through climate lessons',
    copy:
      'Unlock mini lessons on sorting, composting, and energy-saving moves. Every perfect score boosts your streak.',
  },
  {
    title: 'Scan, drop, repeat',
    copy:
      'Scan the bag before each pickup. Verified drops sync instantly so collectors know where to go next.',
  },
  {
    title: 'Get rewarded & share insights',
    copy:
      'Trade points for airtime or MoMo credits and share dashboards that prove your community’s climate impact.',
  },
];

const impactMetrics = [
  {
    value: '48 tonnes',
    label: 'Waste diverted',
    copy: 'Plastics, paper, and cans loop back into Zambia’s circular economy instead of piling up in landfills.',
  },
  {
    value: '1.1K tonnes',
    label: 'CO₂ avoided',
    copy: 'Every verified bag keeps methane-spewing waste out of dumps and offsets transport emissions.',
  },
  {
    value: '72%',
    label: 'Lesson completion rate',
    copy: 'Learners finish most quests because they earn tangible benefits for every correct answer.',
  },
  {
    value: '24 wards',
    label: 'Communities activated',
    copy: 'Grassroots partners co-design missions so urban and peri-urban wards grow greener together.',
  },
];

const testimonials = [
  {
    quote:
      '“TiyeniGreen gave our waste cooperative a real-time view of what households need. Collections are smoother and safer now.”',
    author: 'Chikondi Mwila',
    role: 'Community Lead, Lusaka',
  },
  {
    quote:
      '“The quizzes sparked climate clubs at my school. Students love seeing their recycling points convert to data bundles.”',
    author: 'Evelyn Phiri',
    role: 'Teacher & Explorer Coach',
  },
  {
    quote:
      '“Brands finally see credible impact metrics tied to the rewards they sponsor. It changes how CSR budgets get spent.”',
    author: 'Tawanda Zimba',
    role: 'Sustainability Director',
  },
];

const faqEntries = [
  {
    question: 'Do I need the mobile app to participate?',
    answer: 'Yes. The app keeps your lessons, recycling streaks, and rewards in sync across devices.',
  },
  {
    question: 'What happens to the data collected?',
    answer:
      'Household data is anonymized and shared only in aggregate with municipal partners and sponsors to unlock funding.',
  },
  {
    question: 'Can schools and businesses join?',
    answer:
      'Absolutely. We bundle onboarding, training, and branded missions so large groups can launch in under two weeks.',
  },
];

const createEl = (tag, { className, text, html, attrs } = {}) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  if (html) element.innerHTML = html;
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        element.setAttribute(key, value);
      }
    });
  }
  return element;
};

const scrollToTarget = (selector) => {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const logoWrapper = createEl('main', { className: 'logo-wrapper' });
const logo = createEl('img', { className: 'logo-image', attrs: { src: logoImage, alt: 'TiyeniGreen logo' } });
logoWrapper.appendChild(logo);

const scrollArea = createEl('section', { className: 'scroll-area' });
const spacer = createEl('section', { className: 'scroll-section scroll-spacer' });
scrollArea.appendChild(spacer);

const heroSection = createEl('article', { className: 'scroll-section intro-section', id: 'about' });
heroSection.append(
  createEl('p', { className: 'eyebrow', text: 'Circular economy in motion' }),
  createEl('h1', {
    className: 'hero-title',
    text: 'Modern recycling that rewards learning, verifiable action, and transparent data.',
  }),
  createEl('p', {
    className: 'hero-copy',
    text: 'TiyeniGreen merges playful education with QR-tracked recycling pickups so households earn rewards while cities capture real climate intelligence.',
  })
);

const heroActions = createEl('div', { className: 'hero-actions' });
const primaryCta = createEl('a', {
  className: 'cta-button cta-primary',
  text: 'Book a demo',
  attrs: { href: 'https://tiyenigreen.com/signup', target: '_blank', rel: 'noreferrer' },
});
const secondaryCta = createEl('button', {
  className: 'cta-button cta-secondary',
  text: 'Talk to us',
  attrs: { type: 'button' },
});
secondaryCta.addEventListener('click', () => scrollToTarget('#contact'));
heroActions.append(primaryCta, secondaryCta);
heroSection.appendChild(heroActions);

const statsGrid = createEl('div', { className: 'stat-grid' });
heroStats.forEach(({ value, label }) => {
  const stat = createEl('article', { className: 'stat-card' });
  stat.append(createEl('h3', { text: value }), createEl('p', { text: label }));
  statsGrid.appendChild(stat);
});
heroSection.appendChild(statsGrid);
scrollArea.appendChild(heroSection);

const featuresSection = createEl('article', { className: 'scroll-section cards-section features-section' });
featuresSection.append(
  createEl('h2', { text: 'Everything a modern climate app needs, out of the box.' }),
  createEl('p', {
    className: 'section-lead',
    text: 'From onboarding to transparent rewards, the TiyeniGreen experience makes it easy for households, collectors, and sponsors to rally behind data-backed recycling.',
  })
);

const cardsGrid = createEl('div', { className: 'cards-grid' });
featureHighlights.forEach(({ icon, title, copy }) => {
  const card = createEl('article', { className: 'info-card feature-card' });
  card.append(createEl('span', { className: 'feature-icon', text: icon }), createEl('h3', { text: title }), createEl('p', { text: copy }));
  cardsGrid.appendChild(card);
});
featuresSection.appendChild(cardsGrid);
scrollArea.appendChild(featuresSection);

const valuesSection = createEl('article', { className: 'scroll-section values-section' });
valuesSection.append(createEl('h2', { text: 'Built with people and planet at the center.' }));
const valuesGrid = createEl('div', { className: 'values-grid' });
communityValues.forEach(({ title, copy }) => {
  const block = createEl('article', { className: 'value-card' });
  block.append(createEl('h3', { text: title }), createEl('p', { text: copy }));
  valuesGrid.appendChild(block);
});
valuesSection.appendChild(valuesGrid);
scrollArea.appendChild(valuesSection);

const howSection = createEl('article', { className: 'scroll-section how-section', id: 'how-it-works' });
howSection.append(createEl('h2', { text: 'Launch a community climate app in four steps.' }));
const stepsList = createEl('ol', { className: 'steps-list' });
workflowSteps.forEach(({ title, copy }, idx) => {
  const step = createEl('li', { className: 'step-item' });
  const number = createEl('span', { className: 'step-number', text: `${idx + 1}.` });
  const content = createEl('div', { className: 'step-content' });
  content.append(createEl('h3', { text: title }), createEl('p', { text: copy }));
  step.append(number, content);
  stepsList.appendChild(step);
});
howSection.appendChild(stepsList);
scrollArea.appendChild(howSection);

const impactSection = createEl('article', { className: 'scroll-section impact-section', id: 'impact' });
impactSection.append(createEl('h2', { text: 'Proof that playful learning can shift entire cities.' }));
const impactGrid = createEl('div', { className: 'impact-grid' });
impactMetrics.forEach(({ value, label, copy }, index) => {
  const card = createEl('article', { className: 'impact-card' });
  const badge = createEl('span', { className: 'impact-badge', text: `0${index + 1}` });
  card.append(badge, createEl('h3', { text: value }), createEl('p', { className: 'impact-label', text: label }), createEl('p', { text: copy }));
  impactGrid.appendChild(card);
});
impactSection.appendChild(impactGrid);
scrollArea.appendChild(impactSection);

const storiesSection = createEl('article', { className: 'scroll-section stories-section', id: 'stories' });
storiesSection.append(createEl('h2', { text: 'Leaders using TiyeniGreen every day.' }));
const storiesGrid = createEl('div', { className: 'stories-grid' });
testimonials.forEach(({ quote, author, role }) => {
  const card = createEl('article', { className: 'story-card' });
  card.append(createEl('p', { className: 'quote', text: quote }), createEl('p', { className: 'author', text: author }), createEl('p', { className: 'role', text: role }));
  storiesGrid.appendChild(card);
});
storiesSection.appendChild(storiesGrid);
scrollArea.appendChild(storiesSection);

const faqSection = createEl('article', { className: 'scroll-section faq-section', id: 'faq' });
faqSection.append(createEl('h2', { text: 'Everything partners usually ask.' }));
const faqList = createEl('div', { className: 'faq-list' });
faqEntries.forEach(({ question, answer }) => {
  const item = createEl('article', { className: 'faq-item' });
  item.append(createEl('h3', { text: question }), createEl('p', { text: answer }));
  faqList.appendChild(item);
});
faqSection.appendChild(faqList);
scrollArea.appendChild(faqSection);

const contactSection = createEl('article', { className: 'scroll-section contact-section', id: 'contact' });
contactSection.append(createEl('h2', { text: 'Ready to co-create circular change?' }));

const contactPanels = createEl('div', { className: 'contact-panels' });
const contactInfo = createEl('div', { className: 'contact-info' });
contactInfo.append(
  createEl('p', {
    text: 'Book a working session with our climate product team. We respond within two business days.',
  }),
  createEl('a', {
    className: 'contact-link',
    text: 'Email hello@tiyenigreen.com',
    attrs: { href: 'mailto:hello@tiyenigreen.com' },
  }),
  createEl('a', {
    className: 'contact-link',
    text: 'WhatsApp +260 97 123 4567',
    attrs: { href: 'https://wa.me/260971234567', target: '_blank', rel: 'noreferrer' },
  })
);

const contactForm = createEl('form', { className: 'contact-form' });
const nameLabel = createEl('label', { text: 'Name' });
const nameInput = createEl('input', {
  attrs: { type: 'text', name: 'name', placeholder: 'Your full name', required: 'true' },
});
nameLabel.appendChild(nameInput);

const emailLabel = createEl('label', { text: 'Email' });
const emailInput = createEl('input', {
  attrs: { type: 'email', name: 'email', placeholder: 'you@example.com', required: 'true' },
});
emailLabel.appendChild(emailInput);

const messageLabel = createEl('label', { text: 'What would you like to build?' });
const messageInput = createEl('textarea', {
  attrs: { name: 'message', rows: '4', placeholder: 'Share context for your pilot', required: 'true' },
});
messageLabel.appendChild(messageInput);

const formActions = createEl('div', { className: 'form-actions' });
const formButton = createEl('button', {
  className: 'cta-button cta-primary',
  text: 'Send message',
  attrs: { type: 'submit' },
});
const formStatus = createEl('p', { className: 'form-status', text: '' });
formActions.append(formButton, formStatus);

contactForm.append(nameLabel, emailLabel, messageLabel, formActions);
contactPanels.append(contactInfo, contactForm);
contactSection.appendChild(contactPanels);
scrollArea.appendChild(contactSection);

const joinSection = createEl('article', { className: 'scroll-section join-section' });
joinSection.append(
  createEl('p', { className: 'eyebrow', text: 'Next up' }),
  createEl('h2', { text: 'Make recycling a daily, data-rich habit.' }),
  createEl('p', {
    className: 'join-copy',
    text: 'Join a community turning waste into opportunity. Earn rewards, learn through play, and build Zambia’s green future — one bag at a time.',
  }),
  (() => {
    const buttons = createEl('div', { className: 'cta-buttons' });
    const getStartedLink = createEl('a', {
      className: 'cta-button cta-primary',
      text: 'Get Started →',
      attrs: { href: 'https://tiyenigreen.com/signup', target: '_blank', rel: 'noreferrer' },
    });
    const learnMoreButton = createEl('button', { className: 'cta-button cta-secondary', text: 'See how it works', attrs: { type: 'button' } });
    learnMoreButton.addEventListener('click', () => scrollToTarget('#how-it-works'));
    buttons.append(getStartedLink, learnMoreButton);
    return buttons;
  })()
);
scrollArea.appendChild(joinSection);

const principlesSection = createEl('article', { className: 'scroll-section principles-section' });
principlesSection.append(createEl('h2', { text: 'Field notes from Lusaka' }));
principlesSection.append(
  createEl('p', {
    text: 'Collectors, cooperatives, and households share the same real-time view of progress — so every verified bag strengthens local trust and climate financing.',
  })
);
scrollArea.appendChild(principlesSection);

const root = document.documentElement;
const maxDelta = 0.08;

const updateLogoScale = () => {
  const viewportHeight = scrollArea.clientHeight || window.innerHeight || 1;
  const progress = Math.min(scrollArea.scrollTop / viewportHeight, 1);
  const scale = 1 - progress * maxDelta;
  root.style.setProperty('--logo-scale', scale.toFixed(3));
};

updateLogoScale();
scrollArea.addEventListener('scroll', updateLogoScale, { passive: true });
window.addEventListener('resize', updateLogoScale);

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thanks! We will reply shortly.';
  contactForm.reset();
  setTimeout(() => {
    formStatus.textContent = '';
  }, 4200);
});

document.body.innerHTML = '';
document.body.append(logoWrapper, scrollArea);
