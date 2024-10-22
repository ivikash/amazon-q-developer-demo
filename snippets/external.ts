/* eslint-disable no-console */

// #region snippet
// Inside ./snippets/external.ts
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length })
}
// #endregion snippet

export function sayHello() {
  console.log('Hello from snippets/external.ts')
}

export const workflowStages = {
  IDE: ['Writing Code', 'Planning', 'Documentation'],
  Terminal: ['Running Tests', 'Building Project', 'Local Environment Setup'],
  CloudDeployment: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring and Logging'],
  CommonChallenges: ['First Steps', 'Communication', 'Performance Optimization']
};

export const challenges = {
  'Writing Code': ['Unfamiliarity with structure', 'Learning curve', 'Debugging', 'Version Control'],
  'Planning': ['Lack of clear requirements', 'Estimating time accurately'],
  'Documentation': ['Outdated or missing docs', 'Understanding existing code'],
  'Running Tests': ['Test coverage gaps'],
  'Building Project': ['Dependency issues'],
  'Local Environment Setup': ['Configuration discrepancies'],
  'CI/CD Pipeline': ['Integration failures'],
  'Infrastructure as Code': ['Misconfigurations'],
  'Monitoring and Logging': ['Identifying production issues'],
  'First Steps': ['Where to begin?', 'Setting up development environment'],
  'Communication': ['Collaborating with team members', 'Understanding project goals'],
  'Performance Optimization': ['Identifying bottlenecks', 'Scalability concerns']
};

export function generatePersona() {
  const names = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Morgan', 'Casey'];
  const experiences = ['junior', 'mid-level', 'senior'];
  const technologies = ['JavaScript', 'Python', 'Java', 'C#', 'TypeScript'];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    experience: experiences[Math.floor(Math.random() * experiences.length)],
    favoriteTech: technologies[Math.floor(Math.random() * technologies.length)]
  };
}

export function generateNarrative() {
  const persona = generatePersona();
  let narrative = `Meet ${persona.name}, a ${persona.experience} software engineer who loves working with ${persona.favoriteTech}. `;

  narrative += `Today, ${persona.name} is facing a typical day in the life of a software engineer.\n\n`;

  Object.keys(workflowStages).forEach(stage => {
    narrative += `In the ${stage} stage:\n`;
    const randomTask = workflowStages[stage][Math.floor(Math.random() * workflowStages[stage].length)];
    const randomChallenge = challenges[randomTask][Math.floor(Math.random() * challenges[randomTask].length)];
    
    narrative += `${persona.name} is working on ${randomTask.toLowerCase()}. `;
    narrative += `The main challenge ${persona.name} faces is ${randomChallenge.toLowerCase()}. `;
    
    switch(stage) {
      case 'IDE':
        narrative += `To overcome this, ${persona.name} decides to pair program with a colleague.\n\n`;
        break;
      case 'Terminal':
        narrative += `${persona.name} tackles this by researching best practices and updating the project's documentation.\n\n`;
        break;
      case 'CloudDeployment':
        narrative += `${persona.name} consults with the DevOps team to find a solution.\n\n`;
        break;
      case 'CommonChallenges':
        narrative += `${persona.name} schedules a team meeting to discuss and address this issue collectively.\n\n`;
        break;
    }
  });

  narrative += `Despite the challenges, ${persona.name} remains passionate about coding and problem-solving. `;
  narrative += `With determination and continuous learning, ${persona.name} knows that every challenge is an opportunity to grow as a ${persona.experience} software engineer.`;

  return narrative;
}
