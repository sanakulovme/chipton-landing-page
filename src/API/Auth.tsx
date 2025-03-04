
interface SignUpData {
  password: string;
  email: string;
}

class Auth {
  static sign_up = async (data: SignUpData) => {
    const url = "https://api.agron.uz/api/v1/auth/sign-up";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error("Login failed:", error);
      return {
        ok: false,
        error: "Tizimda xatolik yuz berdi!",
      };
    }
  };
}

export { Auth };