import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Define the props for the component
interface HistoryComponentProps {
  quote: string;
  author: string;
  createdAt: string;
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({ quote, author, createdAt }) => {
  // Format the date to a readable format (e.g., "17 Dec 2024")
  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
    <View style={styles.quoteCard}>
      <Text style={styles.historyText}>{formattedDate}</Text>
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>- {author}</Text>
    </View>

    

    </>
  );
};
const styles = StyleSheet.create({
  quoteCard: {
    backgroundColor: "#4F46E5",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
  quoteText: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
  },
  authorText: {
    color: "#FACC15",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  historyText: {
    color: "white",
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default HistoryComponent;
