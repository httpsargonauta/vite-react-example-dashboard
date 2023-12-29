import { Layout } from '../../layout/_layout';

export function Profile() {
  return (
    <Layout>
      <main className="relative h-screen overflow-hidden  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col w-full md:space-y-4">
            <div className="scroll h-screen px-4 pb-24 md:px-24 py-12">
              <div className="relative text-xl z-50 text-left px-20 max-w-[70ch] h-full text-pretty mx-auto">
                profile
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
