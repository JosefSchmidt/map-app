// Utilities
import formatGeoCoordinate from "./formatGeoCoordinate";

export default function formatData(data) {
  return data
    .map((row) => {
      let formattedRow = {};

      for (const key in row) {
        if (key === "Latitude") {
          formattedRow["lat"] = formatGeoCoordinate(row["Latitude"]);
        } else if (key === "Longitude") {
          formattedRow["lng"] = formatGeoCoordinate(row["Longitude"]);
        } else {
          formattedRow[key] = row[key];
        }
      }

      formattedRow.settings = {
        showInformation: false,
      };

      return formattedRow;
    })
    .filter((row, index) => {
      if (index !== 0 && (row.lat !== undefined || row.lng !== undefined))
        return row;
    });
}
