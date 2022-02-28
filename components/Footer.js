import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <div className="grid h-full content-end">
      <div className="flex justify-center text-medteal gap-1">
        copyright
        <FontAwesomeIcon icon="fa-solid fa-copyright" className=" text-xs" />
        -
        <FontAwesomeIcon icon="fa-solid fa-infinity" className="pt-2 text-xs" /> | Kirk Abbott | All
        rights reserved
      </div>
    </div>
  );
}
