// import {
//   StyleSheet,
//   View,
//   Text,
//   ActivityIndicator,
//   FlatList,
//   ScrollView,
// } from "react-native";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import HistoryComponent from "../Component/HistoryComponent";

// interface Quote {
//   quote: string;
//   author: string;
// }

// interface QuoteHistory {
//   quote: string;
//   author: string;
//   createdAt: string;
// }

// export default function HomeScreen() {
//   const [quoteData, setQuoteData] = useState<Quote | null>(null);
//   const [quoteHistoryData, setQuoteHistoryData] = useState<QuoteHistory[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         const response = await axios.get<Quote>(
//           "https://quote-backend-xqfm.onrender.com/api/v1/quote/today"
//         );
//         setQuoteData(response.data);

//         const historyResponse = await axios.get<QuoteHistory[]>(
//           "https://quote-backend-xqfm.onrender.com/api/v1/quote/all"
//         );
//         setQuoteHistoryData(historyResponse.data);
//       } catch (error) {
//         console.error("Error fetching quote:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuote();
//   }, []);

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* Quote Card */}
//       <View style={styles.quoteCard}>
//         {loading ? (
//           <ActivityIndicator size="large" color="#fff" />
//         ) : (
//           <>
//             <Text style={styles.quoteText}>
//               "{quoteData?.quote ?? "No quote available"}"
//             </Text>
//             <Text style={styles.authorText}>
//               - {quoteData?.author ?? "Unknown"}
//             </Text>
//           </>
//         )}
//       </View>

//       {/* History Section */}
//       <View style={styles.historyContainer}>
//         <Text style={styles.historyText}>Quote History</Text>

//         <FlatList
//           data={quoteHistoryData}
//           keyExtractor={(item, index) => index.toString()}
//           contentContainerStyle={styles.historyListContainer}
//           ListEmptyComponent={() => (
//             <Text style={styles.noDataFound}>No data found</Text>
//           )}
//           renderItem={({ item }) => (
//             <HistoryComponent
//               key={item.createdAt}  // Ensure each item has a unique key
//               quote={item.quote}
//               author={item.author}
//               createdAt={item.createdAt}
//             />
//           )}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1E293B",
//   },
//   quoteCard: {
//     backgroundColor: "#4F46E5",
//     padding: 25,
//     borderRadius: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//     width: "90%",
//     marginTop: 15,
//     alignItems: "center",
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   quoteText: {
//     color: "white",
//     fontSize: 18,
//     fontStyle: "italic",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   authorText: {
//     color: "#FACC15",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "right",
//   },
//   historyText: {
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//     marginLeft: 30,
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   historyContainer: {
//     marginTop: 20,
//   },
//   historyListContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 50,
//   },
//   noDataFound: {
//     fontSize: 16,
//     textAlign: "center",
//     color: "gray",
//     marginTop: 20,
//   },
// });




import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import HistoryComponent from "../Component/HistoryComponent";

interface Quote {
  quote: string;
  author: string;
}

interface QuoteHistory {
  quote: string;
  author: string;
  createdAt: string;
}

export default function HomeScreen() {
  const [quoteData, setQuoteData] = useState<Quote | null>(null);
  const [quoteHistoryData, setQuoteHistoryData] = useState<QuoteHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get<Quote>(
          "https://quote-backend-xqfm.onrender.com/api/v1/quote/today"
        );
        setQuoteData(response.data);

        const historyResponse = await axios.get<QuoteHistory[]>(
          "https://quote-backend-xqfm.onrender.com/api/v1/quote/all"
        );
        setQuoteHistoryData(historyResponse.data);
      } catch (error) {
        console.error("Error fetching quote:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Quote Card */}
      <View style={styles.quoteCard}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <Text style={styles.quoteText}>
              "{quoteData?.quote ?? "No quote available"}"
            </Text>
            <Text style={styles.authorText}>
              - {quoteData?.author ?? "Unknown"}
            </Text>
          </>
        )}
      </View>

      {/* History Section */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyText}>Quote History</Text>
        {quoteHistoryData.length === 0 ? (
          <Text style={styles.noDataFound}>No data found</Text>
        ) : (
          <View style={styles.historyListContainer}>
            {quoteHistoryData.map((item, index) => (
              <HistoryComponent
                key={index}
                quote={item.quote}
                author={item.author}
                createdAt={item.createdAt}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E293B",
  },
  quoteCard: {
    backgroundColor: "#4F46E5",
    padding: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    marginTop: 15,
    alignItems: "center",
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
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  historyContainer: {
    marginTop: "80%",
  },
  historyListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  noDataFound: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginTop: 20,
  },
});



