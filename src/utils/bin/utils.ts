import packageJson from '../../../package.json';
import * as bin from './index';
import * as figlet from 'figlet';
figlet.defaults({ fontPath: 'assets/fonts' });

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  const strJustified = (strArray, lineLength) => {
    let cumulative = strArray[0];
    let curLineLength = cumulative.length;
    for (let index = 1; index < strArray.length; index++) {
      if (curLineLength + strArray[index].length + 2 > lineLength) {
        cumulative += ',\n' + strArray[index];
        curLineLength = strArray[index].length;
      } else {
        cumulative += ', ' + strArray[index];
        curLineLength += strArray[index].length + 2;
      }
    }
    return cumulative;
  };

  return `Available commands:
${strJustified(commands, 45)}
\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const blog = async (args: string[]): Promise<string> => {
  window.open('https://blog.edwinclement08.com', '_self');

  return 'Opening blog version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:term@edwinclement08.com');

  return 'Opening mailto:term@edwinclement08.com...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/edwinclement08/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

const simpleBanner = String.raw`
 _____    _          _       
| ____|__| |_      _(_)_ __  
|  _| / _\` \ \ /\ / / | '_ \ 
| |__| (_| |\ V  V /| | | | |
|_____\__,_| \_/\_/ |_|_| |_|
`;

export const banner = async (args?: string[]): Promise<string> => {
  const fonts = ['big', 'fourtops'];

  const font = fonts[Math.floor(Math.random() * fonts.length)];

  return new Promise((resolve, reject) => {
    figlet.text('edwin', <figlet.Fonts>font, (err, asciiArt) => {
      let nameArt = simpleBanner;
      if (!err) {
        nameArt = asciiArt;
      }

      resolve(`\n${nameArt}

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.

New 🎉: Added justification to help to avoid horizontal scrolling
New 🎉: Forked from m4tt72/terminal
--
`);
      // New 🎉: New command 'changelog'. Lookout here for updates.
    });
  });
};
