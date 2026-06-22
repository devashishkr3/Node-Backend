const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Home Route");
});

app.get("/health", (req, res) =>{
    res.send("Health Route");
})

app.get("/school", (req, res)=>{
    res.send(
        "<h1>Hello From School Route</h1> <p>Heyyy Guysssss!!</p> <marquee>Hello</marquee>"
    )
})

app.get("/login", (req, res)=>{
    res.send(
        `
        <div style="display:flex; justify-content:center; align-items:center; height:100vh; background:linear-gradient(135deg,#4facfe,#00f2fe);">

    <div style="background:white; padding:40px; border-radius:15px; width:350px; text-align:center; box-shadow:0 10px 25px rgba(0,0,0,0.2);">

        <h2 style="margin-bottom:20px; color:#333;">Login</h2>

        <form id="loginForm">

            <div style="margin-bottom:15px;">
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    style="width:100%; padding:12px; border:1px solid #ccc; border-radius:8px; outline:none;"
                >
            </div>

            <div style="margin-bottom:15px;">
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    style="width:100%; padding:12px; border:1px solid #ccc; border-radius:8px; outline:none;"
                >
            </div>

            <button
                type="submit"
                style="width:100%; padding:12px; border:none; border-radius:8px; background:#4facfe; color:white; font-size:16px; cursor:pointer;"
            >
                Login
            </button>

            <p id="message" style="margin-top:15px; font-weight:bold;"></p>

        </form>

    </div>

</div>
        `
    )
})

app.get("/dashboard", (req, res) =>{
    res.send(`
         <div style="
        background:#1e293b;
        color:white;
        padding:15px 30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    ">
        <h2 style="margin:0;">Admin Dashboard</h2>
        <div>
            <span>Welcome, Admin</span>
        </div>
    </div>

    <div style="display:flex;">

        <!-- Sidebar -->
        <div style="
            width:250px;
            height:100vh;
            background:#0f172a;
            color:white;
            padding-top:20px;
        ">
            <ul style="list-style:none; padding:0;">
                <li style="padding:15px 25px; cursor:pointer;">🏠 Dashboard</li>
                <li style="padding:15px 25px; cursor:pointer;">👨‍🎓 Students</li>
                <li style="padding:15px 25px; cursor:pointer;">👨‍🏫 Teachers</li>
                <li style="padding:15px 25px; cursor:pointer;">📚 Courses</li>
                <li style="padding:15px 25px; cursor:pointer;">💰 Payments</li>
                <li style="padding:15px 25px; cursor:pointer;">📢 Notices</li>
                <li style="padding:15px 25px; cursor:pointer;">⚙️ Settings</li>
                <li style="padding:15px 25px; cursor:pointer;">🚪 Logout</li>
            </ul>
        </div>

        <!-- Main Content -->
        <div style="flex:1; padding:30px;">

            <h1 style="margin-top:0;">Dashboard Overview</h1>

            <!-- Cards -->
            <div style="
                display:flex;
                gap:20px;
                flex-wrap:wrap;
            ">

                <div style="
                    background:white;
                    padding:25px;
                    border-radius:10px;
                    width:220px;
                    box-shadow:0 2px 10px rgba(0,0,0,0.1);
                ">
                    <h3>Total Students</h3>
                    <h1>1,250</h1>
                </div>

                <div style="
                    background:white;
                    padding:25px;
                    border-radius:10px;
                    width:220px;
                    box-shadow:0 2px 10px rgba(0,0,0,0.1);
                ">
                    <h3>Total Teachers</h3>
                    <h1>85</h1>
                </div>

                <div style="
                    background:white;
                    padding:25px;
                    border-radius:10px;
                    width:220px;
                    box-shadow:0 2px 10px rgba(0,0,0,0.1);
                ">
                    <h3>Total Courses</h3>
                    <h1>32</h1>
                </div>

                <div style="
                    background:white;
                    padding:25px;
                    border-radius:10px;
                    width:220px;
                    box-shadow:0 2px 10px rgba(0,0,0,0.1);
                ">
                    <h3>Total Revenue</h3>
                    <h1>₹85,000</h1>
                </div>

            </div>

            <!-- Recent Students Table -->
            <div style="
                margin-top:40px;
                background:white;
                padding:20px;
                border-radius:10px;
                box-shadow:0 2px 10px rgba(0,0,0,0.1);
            ">
                <h2>Recent Students</h2>

                <table style="
                    width:100%;
                    border-collapse:collapse;
                    margin-top:20px;
                ">
                    <tr style="background:#e2e8f0;">
                        <th style="padding:12px;">ID</th>
                        <th style="padding:12px;">Name</th>
                        <th style="padding:12px;">Course</th>
                        <th style="padding:12px;">Status</th>
                    </tr>

                    <tr>
                        <td style="padding:12px; text-align:center;">1</td>
                        <td style="padding:12px; text-align:center;">Devashish</td>
                        <td style="padding:12px; text-align:center;">MERN Stack</td>
                        <td style="padding:12px; text-align:center; color:green;">Active</td>
                    </tr>

                    <tr>
                        <td style="padding:12px; text-align:center;">2</td>
                        <td style="padding:12px; text-align:center;">Rahul</td>
                        <td style="padding:12px; text-align:center;">Digital Marketing</td>
                        <td style="padding:12px; text-align:center; color:green;">Active</td>
                    </tr>

                    <tr>
                        <td style="padding:12px; text-align:center;">3</td>
                        <td style="padding:12px; text-align:center;">Aman</td>
                        <td style="padding:12px; text-align:center;">Web Development</td>
                        <td style="padding:12px; text-align:center; color:red;">Inactive</td>
                    </tr>

                </table>
            </div>

        </div>

    </div>
        `)
})

app.get("/not-found", (req, res) =>{
    res.send(`
        <div style="
        text-align:center;
        color:white;
    ">

        <h1 style="
            font-size:120px;
            margin:0;
            color:#38bdf8;
        ">
            404
        </h1>

        <h2 style="
            margin:10px 0;
            font-size:35px;
        ">
            Page Not Found
        </h2>

        <p style="
            color:#cbd5e1;
            font-size:18px;
            margin-bottom:30px;
        ">
            Oops! The page you're looking for doesn't exist.
        </p>

        <a href="/"
           style="
           text-decoration:none;
           background:#38bdf8;
           color:white;
           padding:12px 25px;
           border-radius:8px;
           font-size:16px;
           font-weight:bold;
        ">
            Go Back Home
        </a>

    </div>
        `)
})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})