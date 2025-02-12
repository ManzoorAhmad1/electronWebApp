import { useState } from "react";
import {
  AiOutlineInbox,
  AiOutlineFileText,
} from "react-icons/ai";
import { FaChevronRight, FaChevronDown, FaPaperPlane } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiDraftLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiFirewalla } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { GrCloudUpload } from "react-icons/gr";
import { FcFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, onClick, iconClassName }) => (
  <li
    onClick={onClick}
    className="cursor-pointer flex items-center gap-1 p-1 hover:bg-gray-200 rounded-md"
    role="button"
    tabIndex="0"
  >
    <Icon size={18} className={iconClassName} /> {label}
  </li>
);

const Sidebar = () => {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({ ...prev, [folderName]: !prev[folderName] }));
  };
  const navigate=useNavigate()
  return (
    <div className="w-80 bg-gray-100 p-4 h-auto min-h-screen shadow-lg">
      <div className="w-full flex items-center justify-between mb-2">
        <GrCloudUpload />{" "}
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
            onClick={() => toggleFolder("panchromosHead")}
            className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders["panchromosHead"]}
          >
            {openFolders["panchromosHead"] ? (
              <FaChevronDown size={14} />
            ) : (
              <FaChevronRight size={14} />
            )}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={20} className="text-blue-500" />{" "}
              <p className="font-semibold text-md">Panchromos.com</p>
            </div>
          </div>

          {openFolders["panchromosHead"] && (
            <ul className="pl-5">
              <SidebarItem
                icon={AiOutlineInbox}
                label="Inbox"
                iconClassName="text-blue-500"
                onClick={() => {navigate('/')}}
              />
              <SidebarItem
                icon={RiDraftLine}
                label="Drafts"
                iconClassName="text-purple-500"
                onClick={() => {navigate('/drafts')}}
              />
              <SidebarItem
                icon={FaPaperPlane}
                label="Sent"
                iconClassName="text-green-500"
                onClick={() => {navigate('sent')}}
              />
              <SidebarItem
                icon={ImProfile}
                label="Templates"
                onClick={() => {navigate('/templates')}}
              />

              <li>
                <div
                  onClick={() => toggleFolder("archives")}
                  className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders["archives"]}
                >
                  {openFolders["archives"] ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <div className="flex items-center gap-2 ml-1">
                    <FcFolder size={18} /> Archives
                  </div>
                </div>

                {openFolders["archives"] && (
                  <ul className="pl-5">
                    <SidebarItem
                      icon={AiOutlineFileText}
                      label="P270_Qube4"
                      onClick={() => {}}
                    />
                    <SidebarItem
                      icon={AiOutlineFileText}
                      label="P272_Flomark"
                      onClick={() =>{}}
                    />
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
                  onClick={() => toggleFolder("deleted")}
                  className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders["deleted"]}
                >
                  {openFolders["deleted"] ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <div className="flex items-center gap-2 ml-1">
                    <RiDeleteBin6Line size={18} /> Deleted
                  </div>
                </div>

                {openFolders["deleted"] && (
                  <ul className="pl-5">
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
              <SidebarItem
                icon={FcFolder}
                label="@@Action"
                onClick={() =>{}}
              />
              <SidebarItem
                icon={FcFolder}
                label="@@Decide"
                onClick={() => {}}
              />
              <SidebarItem
                icon={FcFolder}
                label="@@Readingfodder"
                onClick={() =>{}}
              />
              <SidebarItem
                icon={FcFolder}
                label="@@Waiting"
                onClick={() => {}}
              />
              <li>
                <div
                  onClick={() => toggleFolder("archive")}
                  className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders["archive"]}
                >
                  {openFolders["archive"] ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <div className="flex items-center gap-2">
                    <FcFolder size={18} /> Archive
                  </div>
                </div>

                {openFolders["archive"] && (
                  <ul className="pl-5">
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
                  onClick={() => toggleFolder("BaxCo")}
                  className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders["BaxCo"]}
                >
                  {openFolders["BaxCo"] ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <div className="flex items-center gap-2 ml-1">
                    <FcFolder size={18} /> BaxCo
                  </div>
                </div>

                {openFolders["BaxCo"] && (
                  <ul className="pl-5">
                    <SidebarItem
                      icon={AiOutlineFileText}
                      label="P270_Qube4"
                      onClick={() =>{}}
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
                  onClick={() => toggleFolder("panchromos")}
                  className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                  role="button"
                  tabIndex="0"
                  aria-expanded={openFolders["panchromos"]}
                >
                  {openFolders["panchromos"] ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <div className="flex items-center gap-2 ml-1">
                    <FcFolder size={18} /> Panchromos
                  </div>
                </div>

                {openFolders["panchromos"] && (
                  <ul className="pl-5">
                    <li>
                      <div
                        onClick={() => toggleFolder("admin")}
                        className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                        role="button"
                        tabIndex="0"
                        aria-expanded={openFolders["panchromos"]}
                      >
                        {openFolders["admin"] ? (
                          <FaChevronDown size={14} />
                        ) : (
                          <FaChevronRight size={14} />
                        )}
                        <div className="flex items-center gap-2 ml-1">
                          <FcFolder size={18} /> admin
                        </div>
                      </div>
                      {openFolders["admin"] && (
                        <ul className="pl-5">
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
                        onClick={() => toggleFolder("bizdev")}
                        className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                        role="button"
                        tabIndex="0"
                        aria-expanded={openFolders["panchromos"]}
                      >
                        {openFolders["bizdev"] ? (
                          <FaChevronDown size={14} />
                        ) : (
                          <FaChevronRight size={14} />
                        )}
                        <div className="flex items-center gap-2 ml-1">
                          <FcFolder size={18} /> bizdev
                        </div>
                      </div>
                      {openFolders["bizdev"] && (
                        <ul className="pl-5">
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
                        onClick={() => toggleFolder("projects")}
                        className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                        role="button"
                        tabIndex="0"
                        aria-expanded={openFolders["panchromos"]}
                      >
                        {" "}
                        {openFolders["projects"] ? (
                          <FaChevronDown size={14} />
                        ) : (
                          <FaChevronRight size={14} />
                        )}
                        <div className="flex items-center gap-2 ml-1">
                          <FcFolder size={18} /> projects
                        </div>
                      </div>
                      {openFolders["projects"] && (
                        <ul className="pl-5">
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P270_Qube4"
                            onClick={() => {}}
                          />
                          <SidebarItem
                            icon={AiOutlineFileText}
                            label="P272_Flomark"
                            onClick={() =>{}}
                          />
                          <li>
                            <div
                              onClick={() => toggleFolder("Z_archive")}
                              className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
                              role="button"
                              tabIndex="0"
                              aria-expanded={openFolders["panchromos"]}
                            >
                              {openFolders["Z_archive"] ? (
                                <FaChevronDown size={14} />
                              ) : (
                                <FaChevronRight size={14} />
                              )}
                              <div className="flex items-center gap-2 ml-1">
                                <FcFolder size={18} /> Z_archive
                              </div>
                            </div>
                            {openFolders["Z_archive"] && (
                              <ul className="pl-5">
                                <SidebarItem
                                  icon={AiOutlineFileText}
                                  label="P270_Qube4"
                                  onClick={() =>
                                    {}
                                  }
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
            onClick={() => toggleFolder("marcbex")}
            className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders["marcbex"]}
          >
            {openFolders["marcbex"] ? (
              <FaChevronDown size={14} />
            ) : (
              <FaChevronRight size={14} />
            )}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={20} className="text-blue-500" />{" "}
              <p className="font-semibold text-md">marcbex.name</p>
            </div>
          </div>
        </li>
        <li>
          <div
            onClick={() => toggleFolder("baxCompany")}
            className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders["baxCompany"]}
          >
            {openFolders["baxCompany"] ? (
              <FaChevronDown size={14} />
            ) : (
              <FaChevronRight size={14} />
            )}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={20} className="text-blue-500" />{" "}
              <p className="font-semibold text-md">baxcompany.com</p>
            </div>
          </div>
        </li>
        <li>
          <div
            onClick={() => toggleFolder("localFolder")}
            className="cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded-md"
            role="button"
            tabIndex="0"
            aria-expanded={openFolders["localFolder"]}
          >
            {openFolders["localFolder"] ? (
              <FaChevronDown size={14} />
            ) : (
              <FaChevronRight size={14} />
            )}
            <div className="flex items-center gap-2 ml-1">
              <AiOutlineInbox size={20} className="text-blue-500" />{" "}
              <p className="font-semibold text-md">Local Folders</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
