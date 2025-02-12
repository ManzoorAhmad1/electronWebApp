import { useState } from 'react'
import { AiOutlineInbox, AiOutlineFileText } from 'react-icons/ai'
import { FaChevronRight, FaChevronDown, FaPaperPlane } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { RiDraftLine } from 'react-icons/ri'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { SiFirewalla } from 'react-icons/si'
import { FaPlus } from 'react-icons/fa6'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import { GrCloudUpload } from 'react-icons/gr'
import { FcFolder } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const SidebarItem = ({ icon: Icon, label, onClick, iconClassName }) => (
  <div className='hover:border-l-3 pl-0.5 hover:border-blue-700 rounded-none'>
  <li
    onClick={onClick}
    className="cursor-pointer flex items-center gap-1.5 py-0.5 pl-8 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1  rounded-md"
    role="button"
    tabIndex="0"
  >
    <Icon size={14} className={iconClassName} />{' '}
    <span className="font-normal text-xs">{label}</span>
  </li>
  </div>

)

const Sidebar = () => {
  const [openFolders, setOpenFolders] = useState({})

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({ ...prev, [folderName]: !prev[folderName] }))
  }
  const navigate = useNavigate()
  return (
    <div className="w-80 bg-gray-100 py-4 px-2 h-auto min-h-screen shadow-lg">
      <div className="w-full flex items-center justify-between mb-2">
        <GrCloudUpload />{' '}
        <div>
          <button className="bg-blue-500 text-white flex justify-evenly items-center rounded-md px-2 py-1 gap-2">
            <FaPlus />
            <p>New Message</p>
          </button>
        </div>
        <PiDotsThreeOutlineFill />
      </div>
      <ul className="space-y-1">
        <li>
          <div
            onClick={() => toggleFolder('panchromosHead')}
            className="cursor-pointer flex items-center hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders['panchromosHead']}
          >
            {openFolders['panchromosHead'] ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronRight size={12} />
            )}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={16} className="text-blue-500" />{' '}
              <p className="font-semibold text-sm">Panchromos.com</p>
            </div>
          </div>

          {openFolders['panchromosHead'] && (
            <ul className=" ">
              <SidebarItem
                icon={AiOutlineInbox}
                label="Inbox"
                iconClassName="text-blue-500"
                onClick={() => {
                  navigate('/')
                }}
              />
              <SidebarItem
                icon={RiDraftLine}
                label="Drafts"
                iconClassName="text-purple-500"
                onClick={() => {
                  navigate('/drafts')
                }}
              />
              <SidebarItem
                icon={FaPaperPlane}
                label="Sent"
                iconClassName="text-green-500"
                onClick={() => {
                  navigate('sent')
                }}
              />
              <SidebarItem
                icon={ImProfile}
                label="Templates"
                onClick={() => {
                  navigate('/templates')
                }}
              />

              <li>
                <div
                  onClick={() => toggleFolder('archives')}
                  className="cursor-pointer flex items-center pl-4  hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders['archives']}
                >
                  {openFolders['archives'] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  )}
                  <div className="flex items-center gap-2 ml-0.5">
                    <FcFolder size={14} /> <span className="font-normal text-xs">Archives</span>
                  </div>
                </div>

                {openFolders['archives'] && (
                  <ul className=" ">
                    <SidebarItem icon={AiOutlineFileText} label="P270_Qube4" onClick={() => {}} />
                    <SidebarItem icon={AiOutlineFileText} label="P272_Flomark" onClick={() => {}} />
                  </ul>
                )}
              </li>
              <li>
                <SidebarItem
                  icon={SiFirewalla}
                  label="Spam"
                  iconClassName="text-red-500"
                  onClick={() => {}}
                />
              </li>
              <li>
                <div
                  onClick={() => toggleFolder('deleted')}
                  className="cursor-pointer flex items-center pl-4 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders['deleted']}
                >
                  {openFolders['deleted'] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  )}
                  <div className="flex items-center gap-2 ml-0.5">
                    <RiDeleteBin6Line size={14} />{' '}
                    <span className="font-normal text-xs">Deleted</span>
                  </div>
                </div>

                {openFolders['deleted'] && (
                  <ul className=" ">
                    <SidebarItem icon={AiOutlineFileText} label="P270_Qube4" onClick={() => {}} />
                    <SidebarItem icon={AiOutlineFileText} label="P272_Flomark" onClick={() => {}} />
                  </ul>
                )}
              </li>
              <SidebarItem icon={FcFolder} label="@@action" onClick={() => {}} />
              <SidebarItem icon={FcFolder} label="@@decide" onClick={() => {}} />
              <SidebarItem icon={FcFolder} label="@@readingfodder" onClick={() => {}} />
              <SidebarItem icon={FcFolder} label="@@waiting" onClick={() => {}} />
              <li>
                <div
                  onClick={() => toggleFolder('archive')}
                  className="cursor-pointer flex items-center pl-4 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders['archive']}
                >
                  {openFolders['archive'] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  )}
                  <div className="flex items-center gap-2">
                    <FcFolder size={14} />
                    <span className="font-normal text-xs">Archive</span>
                  </div>
                </div>

                {openFolders['archive'] && (
                  <ul className=" ">
                    <SidebarItem icon={AiOutlineFileText} label="P270_Qube4" onClick={() => {}} />
                    <SidebarItem icon={AiOutlineFileText} label="P272_Flomark" onClick={() => {}} />
                  </ul>
                )}
              </li>
              <li>
                <div
                  onClick={() => toggleFolder('BaxCo')}
                  className="cursor-pointer flex items-center px-4 hover:bg-blue-100 hover:border-1 hover:border-blue-500 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders['BaxCo']}
                >
                  {openFolders['BaxCo'] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  )}
                  <div className="flex items-center gap-2 ml-1">
                    <FcFolder size={14} />
                    <span className="font-normal text-xs">BaxCo</span>
                  </div>
                </div>

                {openFolders['BaxCo'] && (
                  <ul className=" ">
                    <SidebarItem icon={AiOutlineFileText} label="P270_Qube4" onClick={() => {}} />
                    <SidebarItem icon={AiOutlineFileText} label="P272_Flomark" onClick={() => {}} />
                  </ul>
                )}
              </li>
              <li>
                <div
                  onClick={() => toggleFolder('panchromos')}
                  className="cursor-pointer flex items-center pl-4 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders['panchromos']}
                >
                  {openFolders['panchromos'] ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  )}
                  <div className="flex items-center gap-2 ml-1">
                    <FcFolder size={14} />
                    <span className="font-normal text-xs">Panchromos</span>
                  </div>
                </div>

                {openFolders['panchromos'] && (
                  <ul className=" ">
                    <li>
                      <div
                        onClick={() => toggleFolder('admin')}
                        className="cursor-pointer flex items-center pl-8 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                        role="button"
                        tabIndex="0"
                        aria-expanded={openFolders['panchromos']}
                      >
                        {openFolders['admin'] ? (
                          <FaChevronDown size={12} />
                        ) : (
                          <FaChevronRight size={12} />
                        )}
                        <div className="flex items-center gap-2 ml-1">
                          <FcFolder size={14} /> <span className='font-normal text-xs'>admin</span>
                        </div>
                      </div>
                      {openFolders['admin'] && (
                        <ul className="ml-9">
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P270_Qube4"
                            onClick={() => {}}
                          />
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P272_Flomark"
                            onClick={() => {}}
                          />
                        </ul>
                      )}
                    </li>
                    <li>
                      <div
                        onClick={() => toggleFolder('bizdev')}
                        className="cursor-pointer flex items-center pl-8 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                        role="button"
                        tabIndex="0"
                        aria-expanded={openFolders['panchromos']}
                      >
                        {openFolders['bizdev'] ? (
                          <FaChevronDown size={12} />
                        ) : (
                          <FaChevronRight size={12} />
                        )}
                        <div className="flex items-center gap-2 ml-1">
                          <FcFolder size={14} /> <span className='font-normal text-xs'>bixdev</span>
                        </div>
                      </div>
                      {openFolders['bizdev'] && (
                        <ul className=" ml-9 ">
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P270_Qube4"
                            onClick={() => {}}
                          />
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P272_Flomark"
                            onClick={() => {}}
                          />
                        </ul>
                      )}
                    </li>
                    <li>
                      <div
                        onClick={() => toggleFolder('projects')}
                        className="cursor-pointer flex items-center pl-8 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                        role="button"
                        tabIndex="0"
                        aria-expanded={openFolders['panchromos']}
                      >
                        {' '}
                        {openFolders['projects'] ? (
                          <FaChevronDown size={12} />
                        ) : (
                          <FaChevronRight size={12} />
                        )}
                        <div className="flex items-center gap-2 ml-1">
                          <FcFolder size={14} /> <span className='font-normal text-xs'>projects</span>
                        </div>
                      </div>
                      {openFolders['projects'] && (
                        <ul className=" ">
                          <div className='ml-9'>

                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P270_Qube4"
                            onClick={() => {}}
                          />
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P272_Flomark"
                            onClick={() => {}}
                          />
                          </div>

                          <li>
                            <div
                              onClick={() => toggleFolder('Z_archive')}
                              className="cursor-pointer flex items-center pl-13 hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
                              role="button"
                              tabIndex="0"
                              aria-expanded={openFolders['panchromos']}
                            >
                              {openFolders['Z_archive'] ? (
                                <FaChevronDown size={12} />
                              ) : (
                                <FaChevronRight size={12} />
                              )}
                              <div className="flex items-center gap-2 ml-1">
                                <FcFolder size={14} /> <span className='font-normal text-xs'>Z_archive</span>
                              </div>
                            </div>
                            {openFolders['Z_archive'] && (
                              <ul className=" ">
                                <SidebarItem
                                  icon={AiOutlineFileText}
                                  label="P270_Qube4"
                                  onClick={() => {}}
                                />
                              </ul>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            onClick={() => toggleFolder('marcbex')}
            className="cursor-pointer flex items-center hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders['marcbex']}
          >
            {openFolders['marcbex'] ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={16} className="text-blue-500" />{' '}
              <p className="font-semibold text-sm">marcbex.name</p>
            </div>
          </div>
        </li>
        <li>
          <div
            onClick={() => toggleFolder('baxCompany')}
            className="cursor-pointer flex items-center hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders['baxCompany']}
          >
            {openFolders['baxCompany'] ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={16} className="text-blue-500" />{' '}
              <p className="font-semibold text-sm">baxcompany.com</p>
            </div>
          </div>
        </li>
        <li>
          <div
            onClick={() => toggleFolder('localFolder')}
            className="cursor-pointer flex items-center hover:bg-blue-100 hover:border-1 hover:border-blue-500 px-1 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders['localFolder']}
          >
            {openFolders['localFolder'] ? (
              <FaChevronDown size={12} />
            ) : (
              <FaChevronRight size={12} />
            )}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={16} className="text-blue-500" />{' '}
              <p className="font-semibold text-sm">Local Folders</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
