import './style.css';
import logoImage from './logot.png';

const impactCards = [
  {
    title: 'A Game-Based Recycling Platform',
    tagline: 'We make recycling fun, rewarding, and measurable.',
    body:
      'TiyeniGreen turns everyday recycling into a game, where users earn points and rewards for verified collections. Each recycling bag has a QR code that links action to data — tracking impact, not just participation.',
  },
  {
    title: 'Learning Meets Action',
    tagline: 'We merge education with engagement.',
    body:
      'Users complete short, interactive lessons that teach waste sorting, climate literacy, and circular economy principles — earning points as they learn and act. Recycling smarter becomes a daily habit, not a chore.',
  },
  {
    title: 'Data for Change',
    tagline: 'We turn every scan into insight.',
    body:
      'Behind the games, our system tracks environmental data from every bag scanned — unlocking real insights on household waste, recycling behavior, and CO₂ savings for communities, businesses, and policymakers.',
  },
  {
    title: 'Building Zambia’s Green Culture',
    tagline: 'We’re starting a movement in Lusaka.',
    body:
      'By connecting households, collectors, and recyclers through play and purpose, we’re building an informed, motivated recycling culture — transforming waste management one smart action at a time.',
  },
];

const sections = [
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

const howItWorksSteps = [
  {
    title: 'Sign Up & Get Your Bags',
    copy:
      'Create your account in the TiyeniGreen app and request recycling bags. Each bag’s QR code links your learning streaks to measurable action.',
  },
  {
    title: 'Learn While You Play',
    copy:
      'Complete quick lessons and quizzes on smart sorting and circular habits. Every correct answer adds points and unlocks new real-life missions.',
  },
  {
    title: 'Scan & Recycle',
    copy:
      'Scan your bag’s QR code each time you recycle. Verified pickups boost your points tally and instantly update your environmental score.',
  },
  {
    title: 'Earn Rewards & Track Impact',
    copy:
      'Cash in points for airtime, data, or MoMo credits and watch your dashboard show CO₂ avoided, waste diverted, and your community ranking.',
  },
];

const impactStats = [
  {
    title: 'Households Reached',
    copy:
      'We’re growing a community committed to smarter recycling. Every new household brings Lusaka closer to a circular future.',
  },
  {
    title: 'Jobs Created',
    copy:
      'Collectors, educators, and youth leaders earn green livelihoods through our network, spreading climate action across neighborhoods.',
  },
  {
    title: 'Tonnes of CO₂ Avoided',
    copy:
      'Each verified bag keeps emissions out of the air. Diverting waste from landfills powers community-level climate action.',
  },
  {
    title: 'Waste Diverted',
    copy:
      'Plastic, paper, and cans loop back into the circular economy — proving small actions add up to big, trackable wins.',
  },
];

const logoWrapper = document.createElement('main');
logoWrapper.className = 'logo-wrapper';

const logo = document.createElement('img');
logo.src = logoImage;
logo.alt = 'TiyeniGreen logo';
logo.className = 'logo-image';

const scrollArea = document.createElement('section');
scrollArea.className = 'scroll-area';

const spacer = document.createElement('section');
spacer.className = 'scroll-section scroll-spacer';
scrollArea.appendChild(spacer);

const introSection = document.createElement('article');
introSection.className = 'scroll-section intro-section';

const introHeading = document.createElement('h2');
introHeading.textContent = 'What is TiyeniGreen?';

introSection.appendChild(introHeading);
scrollArea.appendChild(introSection);

const cardsSection = document.createElement('article');
cardsSection.className = 'scroll-section cards-section';

const cardsGrid = document.createElement('div');
cardsGrid.className = 'cards-grid';

impactCards.forEach(({ title, tagline, body }) => {
  const card = document.createElement('article');
  card.className = 'info-card';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const lead = document.createElement('p');
  lead.className = 'card-tagline';
  lead.textContent = tagline;

  const paragraph = document.createElement('p');
  paragraph.textContent = body;

  card.append(heading, lead, paragraph);
  cardsGrid.appendChild(card);
});

cardsSection.appendChild(cardsGrid);
scrollArea.appendChild(cardsSection);

const howSection = document.createElement('article');
howSection.className = 'scroll-section how-section';
howSection.id = 'how-it-works';

const howHeading = document.createElement('h2');
howHeading.textContent = 'How it works';

const stepsList = document.createElement('ol');
stepsList.className = 'steps-list';

howItWorksSteps.forEach(({ title, copy }, idx) => {
  const item = document.createElement('li');
  item.className = 'step-item';

  const stepNumber = document.createElement('span');
  stepNumber.className = 'step-number';
  stepNumber.textContent = `${idx + 1}.`;

  const stepContent = document.createElement('div');
  stepContent.className = 'step-content';

  const stepTitle = document.createElement('h3');
  stepTitle.textContent = title;

  const stepCopy = document.createElement('p');
  stepCopy.textContent = copy;

  stepContent.append(stepTitle, stepCopy);
  item.append(stepNumber, stepContent);
  stepsList.appendChild(item);
});

howSection.append(howHeading, stepsList);
scrollArea.appendChild(howSection);

const impactSection = document.createElement('article');
impactSection.className = 'scroll-section impact-section';

const impactHeading = document.createElement('h2');
impactHeading.textContent = 'Our Impact';

const impactGrid = document.createElement('div');
impactGrid.className = 'impact-grid';

impactStats.forEach(({ title, copy }, index) => {
  const card = document.createElement('article');
  card.className = 'impact-card';
  card.dataset.index = index + 1;

  const badge = document.createElement('span');
  badge.className = 'impact-badge';
  badge.textContent = `0${index + 1}`;

  const heading = document.createElement('h3');
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.textContent = copy;

  card.append(badge, heading, paragraph);
  impactGrid.appendChild(card);
});

impactSection.append(impactHeading, impactGrid);
scrollArea.appendChild(impactSection);

const joinSection = document.createElement('article');
joinSection.className = 'scroll-section join-section';

const joinEyebrow = document.createElement('p');
joinEyebrow.className = 'eyebrow';
joinEyebrow.textContent = '› Next: 🌍 Join the Movement — TiyeniGreen';

const joinHeadline = document.createElement('h2');
joinHeadline.textContent = 'Make Recycling a Daily Habit.';

const joinCopy = document.createElement('p');
joinCopy.className = 'join-copy';
joinCopy.textContent =
  'Join a community turning waste into opportunity. Earn rewards, learn through play, and build Zambia’s green future — one bag at a time.';

const ctaGroup = document.createElement('div');
ctaGroup.className = 'cta-buttons';

const getStartedLink = document.createElement('a');
getStartedLink.className = 'cta-button cta-primary';
getStartedLink.href = 'https://tiyenigreen.com/signup';
getStartedLink.target = '_blank';
getStartedLink.rel = 'noreferrer';
getStartedLink.textContent = 'Get Started →';

const learnMoreButton = document.createElement('button');
learnMoreButton.className = 'cta-button cta-secondary';
learnMoreButton.type = 'button';
learnMoreButton.textContent = 'Learn More';

learnMoreButton.addEventListener('click', () => {
  howSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

ctaGroup.append(getStartedLink, learnMoreButton);
joinSection.append(joinEyebrow, joinHeadline, joinCopy, ctaGroup);
scrollArea.appendChild(joinSection);

sections.forEach(({ title, copy }) => {
  const block = document.createElement('article');
  block.className = 'scroll-section';

  const heading = document.createElement('h2');
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.textContent = copy;

  block.append(heading, paragraph);
  scrollArea.appendChild(block);
});

logoWrapper.appendChild(logo);

document.body.innerHTML = '';
document.body.append(logoWrapper, scrollArea);

const scroller = scrollArea;
const root = document.documentElement;
const maxDelta = 0.08;

const updateLogoScale = () => {
  const viewportHeight = scroller.clientHeight || window.innerHeight || 1;
  const progress = Math.min(scroller.scrollTop / viewportHeight, 1);
  const scale = 1 - progress * maxDelta;
  root.style.setProperty('--logo-scale', scale.toFixed(3));
};

updateLogoScale();
scroller.addEventListener('scroll', updateLogoScale, { passive: true });
window.addEventListener('resize', updateLogoScale);
