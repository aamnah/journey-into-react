exports.helloWorld = function(req,res,next) {
  res.status(200).json({
    message: "Bonjour la monde!"
  })
}