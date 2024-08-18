import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './pages.css';
const Home = () => {

  return (
    <div>
      <NavigationBar />
      <Hero />
      <PortfolioSection />
      <PowerBIEmbed
        embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: '115c2635-9028-4e06-baf8-2f6771e9fbea',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=115c2635-9028-4e06-baf8-2f6771e9fbea&groupId=260afd38-afa1-404a-b143-54df369aa3d0&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19%22',
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmU2YTIzNjItOWI0Mi00ZWM4LTg2ODQtM2ZiMWE1NDJkZjhjLyIsImlhdCI6MTcyMjMzNjg5NCwibmJmIjoxNzIyMzM2ODk0LCJleHAiOjE3MjIzNDE2ODYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUE2bkFJcUhEZXhRSFFoYjdNU0pQaFA1V1gzTktNK1g4L3REVjIzZDk1ZzFFbWY5RHB1TVA2NmFEZjVYVElLNkZCIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoid2FpcmthciIsImdpdmVuX25hbWUiOiJEaXZ5YSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwMy4xNjAuMjkuNTIiLCJuYW1lIjoiRGl2eWEgd2FpcmthciIsIm9pZCI6IjE4ZWFlNGRmLWVlYTEtNGRlYS1iNjQ0LWFhNTlkM2Y5ZTAyNSIsInB1aWQiOiIxMDAzMjAwMjlDRkFGQjQxIiwicmgiOiIwLkFXNEFZaU5xX2tLYnlFNkdoRC14cFVMZmpBa0FBQUFBQUFBQXdBQUFBQUFBQUFCdUFBWS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJsNG1rR3J6djZaZzB1aFE4U01LcUl2SkJKbThveDc1eUhRR0VVSnZyV29ZIiwidGlkIjoiZmU2YTIzNjItOWI0Mi00ZWM4LTg2ODQtM2ZiMWE1NDJkZjhjIiwidW5pcXVlX25hbWUiOiJkaXZ5YS53YWlya2FyQHZza3lzb2x1dGlvbnMuY29tIiwidXBuIjoiZGl2eWEud2FpcmthckB2c2t5c29sdXRpb25zLmNvbSIsInV0aSI6IkF4Ull1dzlSYWt5NFpHQTk1d2dCQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDIwIn0.YKJHG0hsfqjf4KKmsnIrY8iovtIENrco7DuhBkJsfoA-lYL_sE27mJRFq89jBd5xGMC7iXfzXq0FG9sO739_dlfjA7EHrAB1JRpvF7vKOD0eI7z3acF6t5wyt8-rF8xDMhgnsgTIo3FF5ougxsoqn7-Ltf4mSwBVtMiFSauzYvVTQiOeXEJcz85MXizaFIsvTHKASZe80srr3BPXt4aMKY4E4UQO2aWmMdfR7s24jVCAFC3qrbn_EAy0KP47ELpr_RgI6KayWjWHHSboe3JLuzB24qrxFYpPRnaCbmRDxYOmwYWLAGplqPZCzulHy4VXLanRLYxhgpANWQrPJ9Ncrw',
          tokenType: models.TokenType.Aad, 
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true
              }
            }
          }
        }}

        eventHandlers = {
          new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(event.detail);}],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
          ])
        }

        cssClassName = { "reportClass Embed-container" }

        getEmbeddedComponent = { (embeddedReport) => {
          window.report = embeddedReport;
        }}
      />

      <Footer />

    </div>
  );
};

export default Home;
