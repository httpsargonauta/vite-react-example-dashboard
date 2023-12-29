import { useRef, useState } from 'react';
import { Layout } from '../../layout/_layout';
import {
  ChangeName,
  DeleteUser,
  Token,
  UserDashboard,
  decrypt,
} from '../../functions/_functions';
import '../../functions/_scroll.css';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  ArrowUpCircle,
  MessagesSquareIcon,
  PenSquare,
  XCircle,
} from 'lucide-react';
import { ButtonUI } from '../../components/Button';

export function Settings() {
  const { userData, admin } = UserDashboard();
  const [name, setName] = useState('');

  return (
    <Layout>
      <main className="relative h-screen overflow-hidden  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col w-full md:space-y-4">
            <div className="scroll h-screen px-4 pb-24 md:px-24 py-12">
              <div className="relative text-xl z-50 text-left px-20 max-w-[70ch] h-full text-pretty mx-auto">
                <header className="mb-4">
                  <h1 className="text-3xl font-semibold text-white">
                    Account settings
                  </h1>
                  <p className="text-md w-[300px] sm:w-[400px] text-zinc-500 text-wrap">
                    Settings and options for your application.
                  </p>
                </header>

                <section className="p-3 mb-4 bg-zinc-900 border-zinc-700/80 rounded-sm border-2">
                  <h2 className="text-2xl font-semibold">
                    Your application is on the{' '}
                    <span className="text-[#00d9ff]">free plan</span>
                  </h2>
                  <p className="text-pretty text-md">
                    {' '}
                    Paid plans offer higher usase limits, additional branches,
                    and much more. Learn more{' '}
                    <Link className="underline text-[#00d9ff]" to={`/pricing`}>
                      here
                    </Link>
                    .
                  </p>
                  <div className="flex gap-3 mt-3">
                    <ButtonUI
                      text={'Know us'}
                      icon={<MessagesSquareIcon />}
                      to={'/'}
                      aOb="a"
                      variant={'default'}
                    />
                    <ButtonUI
                      text={'Upgrade'}
                      icon={<ArrowUpCircle />}
                      to={'/pricing'}
                      aOb="a"
                      variant={'principal'}
                    />
                  </div>
                </section>

                <section className="mb-4">
                  <h3 className="font-semibold">Name</h3>
                  <h4>
                    Changes will update{' '}
                    <span className="font-bold text-[#00d9ff]">AUTH</span>{' '}
                    process and{' '}
                    <span className="font-bold text-[#00d9ff]">all URLs</span>.
                  </h4>

                  <div className="w-full mt-2 flex flex-col sm:flex-row gap-2 items-center">
                    <input
                      id="change-name"
                      type="text"
                      style={{ transition: 'width 0.5s' }}
                      className="truncate w-full sm:w-[50%] md:w-[70%]
                   h-12 capitalize bg-transparent border-2 rounded-lg px-4 py-2 text-white mt-2 mb-2"
                      placeholder={decrypt(userData.name)}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <Dialog
                      text={`Change`}
                      input={ChangeName}
                      token={userData.token}
                      name={name}
                      icon={<PenSquare />}
                      aOb={'b'}
                      props="flex-1 w-full"
                    />
                  </div>
                </section>

                <section className="mb-4">
                  <h3 className="font-semibold">Default branch</h3>
                  <h4>Changes will update all URLs.</h4>

                  <div className="w-full mt-2">
                    <input
                      type="text"
                      className="truncate w-full capitalize bg-transparent border-2 rounded-lg px-4 py-2 text-white"
                      placeholder={`${decrypt(userData.name)}`}
                    />
                    <div className="w-full flex py-2">
                      <input
                        type="text"
                        className="truncate w-[50%] h-12 bg-transparent border-2 rounded-l-lg px-4 py-2 text-white select-none none text-md"
                        placeholder="argonauts.com/"
                        readOnly
                      />
                      <input
                        type="text"
                        className="truncate w-[50%] h-12 bg-transparent border-2 rounded-r-lg px-4 py-2 text-white text-md"
                        placeholder="yourenterprise"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

function Dialog({ text = 'Delete', icon, aOb, input, token, name, props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  return (
    <>
      <ButtonUI
        text={text}
        icon={icon}
        variant={'principal'}
        aOb={'b'}
        click={onOpen}
        props={props}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        closeOnOverlayClick
        closeOnEsc
        size="lg"
        preserveScrollBarGap
        blockScrollOnMount
      >
        <AlertDialogOverlay
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            color: 'white',
          }}
        >
          <AlertDialogContent style={{ backgroundColor: '#1f1f1f' }}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {text}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure?{' '}
              <span className="text-red-600">
                You can't undo this action afterwards.
              </span>
            </AlertDialogBody>

            <AlertDialogFooter>
              <button
                className="capitalize mr-2 bg-zinc-900 border-2 rounded-lg px-4 py-2 text-white font-bold flex flex-row justify-center text-center items-center gap-3 transition-all hover:bg-zinc-700 duration-300 ease-in-out"
                onClick={onClose}
                ref={cancelRef}
              >
                Cancel <XCircle />
              </button>

              <ButtonUI
                text={text}
                icon={icon}
                variant={'principal'}
                aOb={'b'}
                click={() => {
                  onClose();
                  {
                    input(token, name);
                  }
                }}
              />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

function changeName() {}
