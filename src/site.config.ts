// Everything on the home page that isn't a project lives here.
// Text fields support inline Markdown: **bold**, *italic*, [links](https://...).

export const site = {
  name: { first: 'Evan', last: 'Applebaum' },
  logo: 'EV.DEV',
  pageTitle: 'Evan Applebaum — Mechatronics & Robotics Engineer',
  description:
    'Mechatronics & Robotics Engineering student at Queen’s University. Embedded systems, power electronics, and robotics projects.',

  hero: {
    tagline: 'Mechatronics & Robotics Engineer',
    subtitle:
      'Building at the intersection of hardware and software — from custom motor controllers to autonomous robots. Queen’s University · Class of 2027.',
    photoAlt: 'Picture of me',
    photoPosition: 'center top',
  },

  about: {
    paragraphs: [
      'I’m a **Mechatronics & Robotics Engineering student at Queen’s University** with a hands-on focus on embedded systems, power electronics, and motor control. I build things that move — and make them work reliably.',
      'From designing 12S battery packs and VESC-based motor controllers to implementing CAN telemetry and autonomous navigation stacks, I operate across the full hardware-software stack.',
      'I’m currently seeking internship and co-op opportunities in **robotics, embedded systems, or EV/power electronics**.',
    ],
    skills: [
      { group: 'Firmware', items: ['C / C++', 'UART', 'CAN Bus', 'ROS2', 'VESC'] },
      { group: 'Hardware', items: ['PCB Design', 'BLDC Control', 'Li-Ion Packs', 'Soldering'] },
      { group: 'Robotics', items: ['Kinematics', 'DH Params', 'Autonomy'] },
      { group: 'Digital Design', items: ['VHDL', 'SystemVerilog'] },
    ],
  },

  contact: {
    heading: 'Let’s Work Together',
    text: 'Looking for internship and co-op opportunities in robotics, embedded systems, or power electronics. Open to full-time roles starting May or September 2026. Feel free to reach out.',
    email: 'evan.applebaum@queensu.ca',
    linkedin: 'https://linkedin.com/in/evanapplebaum',
    github: 'https://github.com/evanapplebaum',
  },
};
