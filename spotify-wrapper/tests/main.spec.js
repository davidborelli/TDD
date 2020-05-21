import { expect } from "chai";
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from "../src/main";

describe("Spotify Wrapper", () => {
  describe("Smoke Tests", () => {
    it("should exist the search method", () => {
      expect(search).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchAlbums).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchTracks).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchPlaylists).to.exist;
    });
  });
});
