import { StyleSheet, View, Text } from "react-native";
import { Agenda, CalendarList } from "react-native-calendars";

export default function CalendarAgenda() {
  const currentDate = new Date();

  // Format the date to match 'YYYY-MM-DD'
  const formattedDate = currentDate.toISOString().split("T")[0];

  const renderItem = (item) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          marginRight: 10,
          marginTop: 17,
        }}
      >
        <Text>{item.name}</Text>
      </View>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={{ height: 50, flex: 1, paddingTop: 30 }}>
        <Text style={{ textAlign: "center", color: "white" }}>
          No events for this day.
        </Text>
      </View>
    );
  };

  return (
    <Agenda
      items={{
        "2024-08-03": [{ name: "Classic Groups Meetup" }],
        "2024-08-04": [{ name: "BF1 meetup", height: 80 }],
        "2024-08-05": [{ name: "Demo Day" }],
        "2024-08-06": [{ name: "truckers meetup" }],
        "2024-08-08": [
          { name: "Ridgeway plaza meetup" },
          { name: "GTA classics meetup" },
        ],
      }}
      // Initially selected day
      selected={formattedDate}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={"2024-01-01"}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={"2025-01-01"}
      renderEmptyDate={() => {
        return renderEmptyDate;
      }}
      renderItem={(item) => {
        return renderItem(item);
      }}
      style={styles.calendar}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    height: 500,
  },
});
