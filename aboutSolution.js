```javascript
// pages/about.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function About({env}) {
  return (
    <div>
      <h1>About Page</h1>
      <p>MY_VAR: {env.MY_VAR}</p>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const myVar = process.env.MY_VAR
  return {
    props: {
      env: {MY_VAR:myVar}
    },
  };
};

export default withPageAuthRequired(About); 
```