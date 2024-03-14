
export default function Input({optionList, value, onChange}) {
  return (
    <div className="w-full">
            <select
              id="coin-select"
              value={value}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {optionList.map((option) => (
                <div>
                  <option key={option.key} value={option.name}>
                    {option.name}
                  </option>
                  <img src="" alt="" />
                </div>
              ))}
            </select>
          </div>
  )
}
