import { Form, Button } from "react-bootstrap";

const LoginComponent = () => {
  const fetchLogin = async (body, token) => {
    try {
      const res = await fetch(`localhost:3001/authors/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
      } else {
        console.log("Error baby");
      }
    } catch (error) {}
  };
  return (
    <div className="m-5">
      <Form className="p-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginComponent;
