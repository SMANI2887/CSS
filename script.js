function generateSimpleotp (){
    const otp = Math.floor(100000 * (Math.random (900000)))
    console.log(otp);
}
generateSimpleotp();