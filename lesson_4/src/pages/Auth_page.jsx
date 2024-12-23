import auth from "../service/auth.js";
import React, {useState} from "react";

const Auth = () => {
    const [content, setContent] = useState("login");
    return (
        <div>
            <div className="text-center mb-4">
                <h2
                    style={{cursor: "grab"}}
                    className={content === "login" ? "text-primary" : ""}
                    onClick={() => setContent("login")}>
                    Sign in
                </h2>
                <h2
                    style={{cursor: "pointer"}}
                    className={content === "create" ? "text-primary" : ""}
                    onClick={() => setContent("create")}>
                    Sign up
                </h2>
            </div>
            {content === "login" && <SignIn/>}
            {content === "create" && <SignUp/>}
        </div>
    );
};

export default Auth;

const SignUp = () => {
    const onSubmit = async (e) => {
        e.preventDefault()  // ?
        const form = e.target // <form> </form>
        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            avatar: form.avatar.value,
        }
        console.log(newUser, '------new user ')
        const res = await auth.createUser(newUser)
    }

    return (
        <div className="container mt-5">
            <div className="content">
                <form onSubmit={onSubmit} className="shadow-lg p-4 rounded" style={{ backgroundColor: '#f9f9f9', maxWidth: '500px', margin: '0 auto' }}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label" style={{ fontSize: '18px', color: '#555' }}>
                            <i className="fas fa-user" style={{ color: '#007bff', marginRight: '10px' }}></i> Name
                        </label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your name" name="name" style={{ padding: '15px', fontSize: '16px' }} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label" style={{ fontSize: '18px', color: '#555' }}>
                            <i className="fas fa-envelope" style={{ color: '#007bff', marginRight: '10px' }}></i> Email
                        </label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" name="email" style={{ padding: '15px', fontSize: '16px' }} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label" style={{ fontSize: '18px', color: '#555' }}>
                            <i className="fas fa-lock" style={{ color: '#007bff', marginRight: '10px' }}></i> Password
                        </label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" name="password" style={{ padding: '15px', fontSize: '16px' }} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="avatar" className="form-label" style={{ fontSize: '18px', color: '#555' }}>
                            <i className="fas fa-image" style={{ color: '#007bff', marginRight: '10px' }}></i> Avatar URL
                        </label>
                        <input type="url" id="avatar" className="form-control" placeholder="Enter your avatar URL" name="avatar" style={{ padding: '15px', fontSize: '16px' }} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ padding: '15px', fontSize: '18px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0, 123, 255, 0.2)' }}>
                        <i className="fas fa-user-plus" style={{ marginRight: '10px' }}></i> Create Account
                    </button>

                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none" style={{ fontSize: '16px', color: '#007bff' }}>
                            <span>Log in</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};
const SignIn = () => {
    const onSubmit = async (e) => {
        e.preventDefault()  // ?

    }
    return (
        <div className="container mt-5">
            <div className="content">
                <form className="shadow-lg p-4 rounded" style={{ backgroundColor: '#f9f9f9', maxWidth: '500px', margin: '0 auto' }}>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label" style={{ fontSize: '18px', color: '#555' }}>
                            <i className="fas fa-envelope" style={{ color: '#007bff', marginRight: '10px' }}></i> Email
                        </label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" name="email" style={{ padding: '15px', fontSize: '16px' }} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label" style={{ fontSize: '18px', color: '#555' }}>
                            <i className="fas fa-lock" style={{ color: '#007bff', marginRight: '10px' }}></i> Password
                        </label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" name="password" style={{ padding: '15px', fontSize: '16px' }} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ padding: '15px', fontSize: '18px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0, 123, 255, 0.2)' }}>
                        <i className="fas fa-user-plus" style={{ marginRight: '10px' }}></i> Log in
                    </button>

                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none" style={{ fontSize: '16px', color: '#007bff' }}>
                            <span>Create account</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );

}