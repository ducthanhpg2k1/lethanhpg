import tw from "tailwind-styled-components";
const Card = tw.div`
w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700
`;

const CardHeader = tw.div`
space-y-1 mb-5
`;

const CardContent = tw.div`
space-y-6
`;

const TitleCard = tw.h5`
text-3xl font-medium text-gray-600 dark:text-white mb-2
`;

const DescribeCard = tw.label`
text-sm font-medium text-gray-600 dark:text-gray-300
`;

const Link = tw.a`
ml-2 text-sm text-green-500 hover:underline dark:text-green-500
`;

const Label = tw.h5`
text-clip font-medium text-gray-900 dark:text-white mb-2
`;

const Input = tw.input`
bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
`;

const Checkbox = tw.input`
w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800
`;

const LabelRemember = tw.label`
ml-2 text-sm font-medium text-gray-600 dark:text-gray-300
`;

const Button = tw.button`
text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
`;

export {
  Card,
  CardHeader,
  CardContent,
  TitleCard,
  DescribeCard,
  Link,
  Label,
  Input,
  Checkbox,
  LabelRemember,
  Button,
};
