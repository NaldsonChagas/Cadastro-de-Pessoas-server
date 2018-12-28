module.exports = function error(res, status, errorMessage) {
  return res.status(status).json({ error: errorMessage });
}