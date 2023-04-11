import { FormWrapper } from "./FormWrapper";

export function Table3Form({
  Eleventh,
  Twelfth,
  Thirteenth,
  Fourteenth,
  Fifteenth,
  updateFields,
}) {
  return (
    <FormWrapper title=" Какими качествами ты обладаешь?">
      <p>Какими качествами ты обладаешь?</p>
      <ul className={"no-bullets"}>
        <li className={"flex-li"}>
          <label>
            <input
              type="checkbox"
              name="option1"
              value="option1"
              checked={Eleventh}
              onChange={(e) => updateFields({ Eleventh: e.target.checked })}
            />
            <p>
              Способность наглядно представлять себе новое явление, ранее, не
              встречающееся в
            </p>
            <p style={{ marginTop: "60px" }}>
              опыте, или старое, но в новых условиях
            </p>
          </label>
        </li>
        <li className={"flex-li"}>
          <label>
            <input
              type="checkbox"
              name="option1"
              value="option1"
              checked={Twelfth}
              onChange={(e) => updateFields({ Twelfth: e.target.checked })}
            />
            <p>Способность к воссозданию образа по словесному описанию</p>
          </label>
        </li>
        <li className={"flex-li"}>
          <label>
            <input
              type="checkbox"
              name="option1"
              value="option1"
              checked={Thirteenth}
              onChange={(e) => updateFields({ Thirteenth: e.target.checked })}
            />
            <p>Способность к зрительным представлениям</p>
          </label>
        </li>
        <li className={"flex-li"}>
          <label>
            <input
              type="checkbox"
              name="option1"
              value="option1"
              checked={Fourteenth}
              onChange={(e) => updateFields({ Fourteenth: e.target.checked })}
            />
            <p>
              Креативность (способность порождать необычные идеи, отклоняться от
            </p>
            <p style={{ marginTop: "60px" }}>традиционных схем мышления)</p>
          </label>
        </li>
        <li className={"flex-li"}>
          <label>
            <input
              type="checkbox"
              name="option1"
              value="option1"
              checked={Fifteenth}
              onChange={(e) => updateFields({ Fifteenth: e.target.checked })}
            />
            <p>
              Объем внимания (количество объектов, на которые может быть
              направлено внимание
            </p>
            <p style={{ marginTop: "60px" }}>
              при их одновременном восприятии)
            </p>
          </label>
        </li>
      </ul>
    </FormWrapper>
  );
}
