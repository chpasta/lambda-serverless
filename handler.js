module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Levio first function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
