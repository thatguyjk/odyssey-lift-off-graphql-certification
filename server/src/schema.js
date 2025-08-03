const gql = require("graphql-tag");

const typeDefs = gql`
  "A track is a module that teaches about different topics"
  type Track {
    id: ID!
    "The title of this track"
    title: String!
    "The tracks author"
    author: Author!
    "The thumbnail for the track"
    thumbnail: String
    "The total length of the track"
    length: Int
    "The number of modules that this track contains"
    modulesCount: Int
    "The description of what this Track is about"
    description: String
    "The number of view this Track has"
    numberOfViews: Int
    "The list of modules for this track"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "The title of this module"
    title: String!
    "The length of this module in minutes"
    length: Int
  }

  "Author of a complete track or module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Get a single Track based on an id"
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "The status code of the mutation"
    code: Int!
    "Tells if the operation of the mutation was a success"
    success: Boolean!
    "A message that is sent to the client on the status of the mutation"
    message: String!
    "The data that the mutation reacts on"
    track: Track
  }
`;

module.exports = typeDefs;
