"use client"

import React, { useState, useEffect } from 'react';
 
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/welcome'); // redirect
        }
    }, [session, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (!username || !password || !confirmPassword) {
            setError("Please complete all inputs.");
            return;
        }

        try {
            const res = await fetch("https://longin.myads.dev/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, password
                })
            });

            const data = await res.json();

            if (res.ok) {
                setError("");
                setSuccess(data.message);

                e.target.reset();
                setTimeout(() => {
                    router.push("/login");
                }, 1500);
            } else {
                setError(data.message || "User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
            setError("An error occurred during registration.");
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '400px' }}>
                    <h3 className="text-center mb-4 text-primary">Register</h3>
                    {error && (
                        <div className="alert alert-danger text-center">{error}</div>
                    )}
                    {success && (
                        <div className="alert alert-success text-center">{success}</div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center">
                        <p>
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
