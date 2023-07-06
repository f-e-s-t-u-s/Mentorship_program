import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FetchRelations } from "../pages/helpers/homeFetchFunctions";

function RelatedComponet({ hasMentor }) {
  // !store student info
  const [relations, setrelations] = useState({});
  // ! const id
  const { id } = useSelector((store) => store.userInfo);
  useEffect(() => {
    const values = {
      id: id,
    };
    if (hasMentor) {
      FetchRelations(values)
        .then((data) => {
          setrelations(data.data[0]);
        })
        .catch((error) => toast.error("failed to connect"));
    }
  }, [id]);

  console.log(relations);
  return (
    <div className="menteesInformation">
      <div className="mentor">
        <strong className="underline"> Mentors details</strong>
        <div className="detailsOfMentor">
          <p>
            <strong className="strongs">Name:</strong>
            { relations && relations?.mentor_id?.name}
          </p>
          <p>
            <strong className="strongs">career Path:</strong>

            {relations && relations?.mentor_id?.preference.join(",")}
          </p>
          <p>
            <strong className="strongs">Mentees :</strong>
            {relations && relations?.mentor_id?.student}
          </p>
        </div>
      </div>

      <div className="studentsCpntainer">
        <strong className="underline"> Students with the same mentor</strong>
        <div className="students">
          {relations && relations?.student_id?.map((single) => (
            <div className="singleStudent">
              <p>
                <strong className="strongs">Name:</strong>
                {single?.name}
              </p>
              <p>
                <strong className="strongs"> Career path:</strong>
                {single.preference?.join(",")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedComponet;
