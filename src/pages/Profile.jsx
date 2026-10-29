import { useState } from "react";
import { supabase } from "../supabase"

function Profile() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);

    const handleSendOtp = async () => {
        if (!email) return alert("Enter Email Address");
        if (loading) return;
        setLoading(true);
        try {
            await supabase.auth.signOut();
            const { error } = await supabase.auth.signInWithOtp({ email: email.trim().toLowerCase(), options: { shouldCreateUser: true } });

            if (error) throw error;
            alert("OTP sent! check your email");
            setStep(2)
        } catch (err) {
            alert(err.message)
        }
        setLoading(false)
    };
    const handleVerifyOtp = async () => {
        if (!otp || otp.trim().length !== 6) return
        console.log("Enter 6-digit code that as sent to your email")
        setLoading(true)
        const { error } = await supabase.auth.verifyOtp({
            email: email.trim().toLowerCase(),
            token: otp.trim(),
            type: "email"
        });
        setLoading(false)
        if (error) {
            console.log(error)
        } else {
            console.log("Login Successful!");
            window.location.href = "/";
        }
    };
    return (

        <div className="container">
            <div className="headings">LOGIN/REGISER</div>
            {step === 1 ? (
                <>
                    <p>Enter your email below to receive an OTP</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <button onClick={handleSendOtp} className="btn" disabled={loading}>
                        {loading ? "Sending..." : "Send OTP"}</button>
                </>
            ) : (
                <>
                    <p>Enter Otp sent to Email</p>
                    <input type="text" placeholder="Enter 6-digits OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <button onClick={handleVerifyOtp} className="btn" disabled={loading}>
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </>
            )}
        </div>
    )
}
export default Profile;