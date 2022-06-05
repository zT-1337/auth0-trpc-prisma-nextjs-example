import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const afterCallback = (req: NextApiRequest, res: NextApiResponse, session: Session, state?: {}) => {
  if (session.user.email === 'thomas.zerr@gmail.comtest') {
    session.user.role = 'admin';
  }

  console.log(session);

  return session;
};

const authHandler = handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error: any) {
      res.status(error.status || 500).end(error.message);
    }
  }
});

export default authHandler;