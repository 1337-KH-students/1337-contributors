import * as React from "react";
import User from "../components/User";
import Layout from "../components/Layout";
import { hot } from "react-hot-loader";
import Student from "../Student";

interface ContributorsProps {
  users: Student[];
}

const Contributors: React.FC<ContributorsProps> = ({ users }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-24 px-14 mx-auto max-w-screen-xl">
      {users?.map((node: Student, i: number) => (
        <User {...node} key={i} />
      ))}
    </div>
  );
};

const IndexPage: React.FC = () => {
  function requireAll(r: any): Student[] {
    return r.keys().map((element: string) => r(element));
  }

  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setUsers(
      requireAll(require.context("../../contributors/", false, /\.yml$/))
    );
  }, []);

  React.useEffect(() => {
    setLoading(users?.length > 0 ? true : false);
  }, [users]);

  return (
    <Layout>
      <div className="bg-gray-1000">
        <div className=" mx-auto max-w-screen-xl flex flex-col text-center items-center p-28 ">
          <h2 className="font-sora text-md md:text-lg lg:text-xl mb-4 text-gray-500">
            Our Contributors
          </h2>
          <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl">
            The <span className="text-effect-1">Brilliant Minds</span> Powering{" "}
            <span className="text-effect-1">1337's Journey</span> of{" "}
            <span className="text-effect-1">Innovation</span>
          </h1>
        </div>
      </div>

      {isLoading ? (
        <Contributors users={users} />
      ) : (
        <div className="flex justify-center pt-20">hmmm...</div>
      )}
    </Layout>
  );
};

export default hot(module)(IndexPage);
