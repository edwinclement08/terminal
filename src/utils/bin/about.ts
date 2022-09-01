// import { getBio } from '../../api';

const aboutMe = `$ whoami

I am Edwin, an engineer.

I love building simple interfaces to complex systems. However hard the underlying problem, I endeavour to
make it intuitive to use and simple to understand.

On the side, I tinker with robotics and fiddle with electronics.

Right now I am learning about ROS.
`;

export const about = (args: string[]): Promise<string> => {
  // export const about = async (args: string[]): Promise<string> => {
  // const bio = await getBio();

  // return bio;

  return new Promise((res) => {
    res(`$ whoami ${aboutMe}`);
  });
};
