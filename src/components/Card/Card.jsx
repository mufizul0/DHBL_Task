import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function BackgroundBlogCard() {
    return (
      <Card
        shadow={false}
        className="  relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 hover: rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            From Design To Market
          </Typography>
          <button type="button" className="text-white  bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-medium px-5 py-2.5 ms-2 text-center mr-2 mb-5 dark:focus:ring-yellow-900">Explore Our Potential</button>
        </CardBody>
      </Card>
    );
  }