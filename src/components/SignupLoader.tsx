import "./loader.css";

export const SignupLoader = () => {
	window.location.href = 'https://auth.chipton.uz/signup?utm_source=website&utm_medium=chipton.uz&utm_compagin=nav-button'
    return (
      <div className='loader-container'><div className="loader"></div></div>
    );
}
