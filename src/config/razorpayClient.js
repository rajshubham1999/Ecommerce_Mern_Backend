const Razorpay = require('razorpay');

apiKey="rzp_test_kqhDifr91tWQeB"
apiSecret="Msv3DXAOy235sliwk3FMEMmb"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;