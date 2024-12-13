import FacebookLogin from '@greatsumini/react-facebook-login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleResponse = async (response) => {
        const userData = {
            name: response.name,
            email: response.email,
            id: response.id,
            avatar: response.picture.data.url
        }
        const loginResponse = await fetch('http://localhost:3000/api/auth/login', {
            method: 'post',
            credentials: 'include',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData)
        })
        const data = await loginResponse.json()
        if (!loginResponse.ok) {
            alert(data.message)
        }

        navigate('/profile')

    }
    return (
        <div>
            <h1>Facebook Login </h1>

            <FacebookLogin
                appId={import.meta.env.VITE_FB_APP_ID}
                onSuccess={(response) => {
                    console.log('Login Success!', response);
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={handleResponse}
            />
        </div>
    )
}

export default Login