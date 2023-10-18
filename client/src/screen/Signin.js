import React from 'react'

export default function Signin() {
    return (
        <div className='container w-50 card p-5 my-5 '>
            <h1 className='text-center'>Sign In Form</h1>
            <form action="/">
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-warning">Sign In</button>
            </form>
            <a href="/" className='text-center text-white' style={{'text-decoration':'none'}}>Register</a>
        </div>
    )
}
