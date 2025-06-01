(function(kids, partner, location, job) {
  const message = `You will be a ${job} in ${location}, and married to ${partner} with ${kids} kids.`;
  document.getElementById("result").textContent = message;
})(3, "Maryam", "Casa", "Full Stack Developer");
