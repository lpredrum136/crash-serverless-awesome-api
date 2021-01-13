'use strict';

module.exports.getenv = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        variables: {
          googleAPIKey: process.env.GOOGLE_MAPS_API_KEY,
          otherAPIKey: process.env.OTHER_API_KEY,
        },
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
