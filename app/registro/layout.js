import { Arriba_inicio } from "../_layout_arriba/Arriba_inicio";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
        <div>
          <div>
            <Arriba_inicio></Arriba_inicio>
          </div>
          <div>{children}</div>
        </div>
  );
}
