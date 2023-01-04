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
const LabelError = tw.h5`
text-sm font-medium text-red-400
`;

const FormErrorText = tw.h5`
flex items-center mt-1
`;



const Loading = tw.h5`
text-clip font-medium text-green-500 dark:text-white mb-2 ml-4
`;

const Container=tw.div`
min-h-screen flex justify-center items-center
`

const Input = tw.input`
bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-green-600 focus:border  focus:shadow-[0_0px_3px_5px_rgba(72,255,144,0.19)] focus:outline-none block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
`;

const Checkbox = tw.input`
w-4 h-4 border border-gray-300 text-green-600 rounded bg-gray-50 focus:ring-3 focus:ring-green-300  
`;

const LabelRemember = tw.label`
ml-2 text-sm font-medium text-gray-600 dark:text-gray-300
`;

const Button = tw.button`
text-white bg-green-600 disabled:bg-gray-300 disabled:text-gray-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
`;

const Row = tw.div`
flex
`;

const Column = tw.div`
`;

const Relative = tw.div`
relative
`;

const IconEye = tw.svg`
absolute right-3 w-6 h-6 bottom-2
`;

const IconCaution = tw.svg`
w-4 h-4 mr-2
`;

const IconTick = tw.svg`
w-6 h-6 mr-2
`;



const Stack = tw.div`
flex items-start justify-between
`;

const ItemsStart = tw.div`
flex items-start
`;

const ItemsCenter = tw.div`
flex items-center h-5
`;

const CardWelcome = tw.div`
border rounded-md border-green-500 p-4 w-1/4
`;

const TitleCardWelcome = tw.span`
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
  Loading,
  Container,
  Row,
  Column,
  Relative,
  IconEye,
  Stack,
  ItemsStart,
  ItemsCenter,
  IconCaution,
  LabelError,
  FormErrorText,
  IconTick,
  CardWelcome,
  TitleCardWelcome
};
